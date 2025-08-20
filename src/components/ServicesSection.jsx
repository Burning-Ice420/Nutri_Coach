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
      image: "/services/weight.jpg",
      href: "#weight-loss",
    },
    {
      title: "PCOD Management",
      description:
        "Specialized diet plans to manage PCOD symptoms and improve hormonal health.",
      image: "/services/main.png",
      href: "#pcod",
    },
    {
      title: "Wedding Diet Plans",
      description:
        "Look your best on your special day with customized pre-wedding nutrition plans.",
      image: "/services/wedding.jpeg",
      href: "#wedding",
    },
  ];

  return (
    <section id="services-section" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Programs offered by Nutri Coach
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
                    onClick={() => {
                      if (service.title === "Weight Management")
                        window.location.href = "/weightloss";
                      else if (service.title === "PCOD Management")
                        window.location.href = "/pcod";
                      else if (service.title === "Wedding Diet Plans")
                        window.location.href = "/wedding";
                    }}
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
