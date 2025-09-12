import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "Remote • India",
      subContent: "Available worldwide",
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "hello@currydevs.com",
      subContent: "We reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+91 000 000 0000",
      subContent: "Mon-Fri 9AM-6PM IST",
    },
    {
      icon: MessageCircle,
      title: "How Can We Help?",
      content: "Tell us your problem",
      subContent: "We will get back to you ASAP",
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="text-eyebrow animate-fade-in stagger-1">CONTACT US</div>
          <h2 className="text-h2 text-brand-text mb-6 animate-slide-up stagger-2">
            Let&apos;s Solve This Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`group p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-smooth hover-lift animate-scale-in stagger-${index + 3}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <item.icon className="h-6 w-6 text-brand-text" />
                    <h3 className="text-lg font-semibold text-brand-text">{item.title}</h3>
                  </div>
                  <p className="text-brand-text">{item.content}</p>
                  <p className="text-sm text-brand-text-muted mt-1">{item.subContent}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm shadow-strong animate-slide-up stagger-7">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-brand-text mb-8">Send us a Message</h2>
              <form className="space-y-6">
                {["name", "email", "message"].map((field) => (
                  <div key={field} className="transition-smooth">
                    <label
                      htmlFor={field}
                      className="text-sm font-medium text-brand-text mb-2 block"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}*
                    </label>
                    {field === "message" ? (
                      <Textarea
                        id={field}
                        name={field}
                        placeholder={`Enter your ${field}`}
                        required
                        className="bg-white/10 border-white/20 text-brand-text placeholder:text-brand-text-muted min-h-[160px] focus:ring-white/30 transition-smooth resize-none"
                      />
                    ) : (
                      <Input
                        id={field}
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        placeholder={`Enter your ${field}`}
                        required
                        className="bg-white/10 border-white/20 text-brand-text placeholder:text-brand-text-muted focus:ring-white/30 transition-smooth"
                      />
                    )}
                  </div>
                ))}
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full hover-lift hover-glow"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}