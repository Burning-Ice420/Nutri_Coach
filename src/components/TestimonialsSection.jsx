import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      weight: "Lost 15 kg",
      text: "Poonam's personalized diet plan transformed my life. I not only lost weight but gained confidence and energy!",
      rating: 5
    },
    {
      name: "Ravi Kumar", 
      location: "Delhi",
      weight: "Lost 22 kg",
      text: "The PCOD management program helped me regulate my hormones naturally. Best decision ever!",
      rating: 5
    },
    {
      name: "Anita Desai",
      location: "Bangalore", 
      weight: "Lost 12 kg",
      text: "Wedding diet plan made me look stunning on my special day. Thank you for the amazing support!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From Bad Diets to Forever Fit
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our Clients Share their Success Stories
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <div className="mt-2 inline-block bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.weight}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;