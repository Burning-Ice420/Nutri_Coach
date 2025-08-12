import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Weight Management",
      description:
        "Sustainable weight loss through personalized nutrition plans and lifestyle coaching.",
      image:
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
      href: "#weight-loss",
    },
    {
      title: "PCOD Management",
      description:
        "Specialized diet plans to manage PCOD symptoms and improve hormonal health.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      href: "#pcod",
    },
    {
      title: "Wedding Diet Plans",
      description:
        "Look your best on your special day with customized pre-wedding nutrition plans.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      href: "#wedding",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Programs offered by Dietitian Poonam Sagar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/20"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 text-center">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-center mb-6 text-muted-foreground">
                  {service.description}
                </CardDescription>
                <div className="text-center">
                  <Button
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
