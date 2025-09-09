import { useState } from "react";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const budgetOptions = ["< $2k", "$2k–$5k", "$5k–$15k", "$15k+"];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within one business day.",
    });
    
    setIsSubmitting(false);
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-primary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-brand-text mb-6">Tell us about your project</h2>
            <p className="text-lg text-brand-text-muted">
              We reply within one business day. Let's build something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-brand-accent-primary mb-4" />
                  <h3 className="text-lg font-semibold text-brand-text mb-2">Email Us</h3>
                  <p className="text-brand-text-muted mb-4">
                    Prefer email? Drop us a line and we'll respond quickly.
                  </p>
                  <a 
                    href="mailto:hello@currydevs.com"
                    className="text-brand-accent-primary hover:text-brand-text transition-colors font-medium"
                  >
                    hello@currydevs.com
                  </a>
                </CardContent>
              </Card>

              <div className="text-sm text-brand-text-muted space-y-2">
                <p>🌏 Remote • India</p>
                <p>⚡ Quick turnaround times</p>
                <p>🔒 Your data stays private</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm shadow-strong">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-brand-text">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          className="bg-white/10 border-white/20 text-brand-text placeholder:text-brand-text-muted focus:ring-white/30"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-brand-text">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="bg-white/10 border-white/20 text-brand-text placeholder:text-brand-text-muted focus:ring-white/30"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-brand-text">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          className="bg-white/10 border-white/20 text-brand-text placeholder:text-brand-text-muted focus:ring-white/30"
                          placeholder="Your company"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-brand-text">Budget</Label>
                        <Select name="budget">
                          <SelectTrigger className="bg-white/10 border-white/20 text-brand-text">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-brand-text">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="bg-white/10 border-white/20 text-brand-text placeholder:text-brand-text-muted focus:ring-white/30 resize-none"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        disabled={isSubmitting}
                        className="flex-1"
                      >
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                      <Button 
                        type="button" 
                        variant="hero-secondary" 
                        size="lg" 
                        asChild
                      >
                        <a href="mailto:hello@currydevs.com">
                          <Mail className="h-4 w-4 mr-2" />
                          Email Us
                        </a>
                      </Button>
                    </div>

                    <p className="text-xs text-brand-text-muted">
                      We only use your info to contact you back. No spam, ever.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}