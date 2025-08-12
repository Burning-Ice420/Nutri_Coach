import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";

const AllPlans = () => {
  const plans = [
    {
      name: "Weight Management",
      price: "₹4,999",
      duration: "3 months",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
      features: [
        "Personalized meal plans",
        "Weekly check-ins",
        "Progress tracking",
        "Recipe suggestions",
        "Lifestyle coaching",
      ],
    },
    {
      name: "PCOD/PCOS Management",
      price: "₹5,999",
      duration: "4 months",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      features: [
        "Hormonal balance nutrition",
        "Specialized meal plans",
        "Supplement guidance",
        "Regular monitoring",
        "Lifestyle modifications",
      ],
    },
    {
      name: "Wedding Package",
      price: "₹3,999",
      duration: "2 months",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      features: [
        "Bridal glow nutrition",
        "Timeline-based planning",
        "Skin health focus",
        "Stress management",
        "Photo-ready preparation",
      ],
    },
    {
      name: "Therapeutic Plans",
      price: "₹6,999",
      duration: "6 months",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      features: [
        "Medical nutrition therapy",
        "Disease-specific diets",
        "Doctor collaboration",
        "Regular assessments",
        "Long-term management",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Choose Your
            <span className="text-primary block">Perfect Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive nutrition programs designed for your specific health
            goals. Expert guidance, personalized plans, and ongoing support.
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="mb-4">
                    <img
                      src={plan.image}
                      alt={plan.name}
                      className="w-full h-32 object-cover rounded-lg mx-auto"
                    />
                  </div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">
                      {plan.price}
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {plan.duration} program
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Choose This Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a free consultation and we'll help you choose the perfect
              program
            </p>
            <Button size="lg" className="text-lg px-8 py-4">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllPlans;
