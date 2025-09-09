import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { 
    author: "Priya S.", 
    role: "Product Lead", 
    text: "CurryDevs shipped in weeks what took others months—flawless UX.",
    rating: 5
  },
  { 
    author: "Arjun K.", 
    role: "Founder", 
    text: "Their attention to detail and performance is unmatched.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-brand-text mb-6">What Clients Say</h2>
          <p className="text-lg text-brand-text-muted max-w-2xl mx-auto">
            Don't just take our word for it—hear from the teams 
            we've helped succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gradient-primary border-white/10 shadow-medium hover:shadow-strong transition-all duration-300"
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-brand-text leading-relaxed mb-6">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-accent-primary to-brand-text-muted rounded-full flex items-center justify-center mr-4">
                    <span className="text-brand-bg font-semibold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-text">
                      {testimonial.author}
                    </div>
                    <div className="text-brand-text-muted">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}