import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="mb-18 py-12 sm:py-16 md:py-20">
      <div className="mb-8 relative z-10 flex flex-col items-center justify-center">
        <span className="mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-xl text-transparent">
          STILL
        </span>
        <h2 className="mb-8 text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
          Got any Doubts?
        </h2>
      </div>
      <div className="container-custom px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <ContactCard
            title="Contact Us"
            description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
            contactInfo={[
              {
                icon: MailIcon,
                label: "Email",
                value: "currydevs.co@gmail.com",
              },
              {
                icon: PhoneIcon,
                label: "Phone",
                value: "+91-8090284072",
              },
              {
                icon: MapPinIcon,
                label: "Address",
                value: "Remote • India",
                className: "col-span-2",
              },
            ]}
          >
            <form action="" className="w-full space-y-3 sm:space-y-4">
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <Label className="text-white font-medium text-sm sm:text-base">
                  Name
                </Label>
                <Input
                  type="text"
                  className="bg-white border-2 border-black text-black placeholder:text-gray-500 focus:border-black focus:ring-0 h-10 sm:h-11 text-sm sm:text-base"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <Label className="text-white font-medium text-sm sm:text-base">
                  Email
                </Label>
                <Input
                  type="email"
                  className="bg-white border-2 border-black text-black placeholder:text-gray-500 focus:border-black focus:ring-0 h-10 sm:h-11 text-sm sm:text-base"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <Label className="text-white font-medium text-sm sm:text-base">
                  Phone
                </Label>
                <Input
                  type="phone"
                  className="bg-white border-2 border-black text-black placeholder:text-gray-500 focus:border-black focus:ring-0 h-10 sm:h-11 text-sm sm:text-base"
                  placeholder="Enter your phone"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <Label className="text-white font-medium text-sm sm:text-base">
                  Message
                </Label>
                <Textarea
                  className="bg-white border-2 border-black text-black placeholder:text-gray-500 focus:border-black focus:ring-0 min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                  placeholder="Enter your message"
                />
              </div>
              <Button
                className="w-full bg-white text-black border-2 border-white hover:bg-black hover:text-white transition-all duration-300 font-bold h-10 sm:h-11 text-sm sm:text-base"
                type="button"
              >
                Submit
              </Button>
            </form>
          </ContactCard>
        </div>
      </div>
    </section>
  );
}
