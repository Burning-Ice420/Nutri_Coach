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
import { CheckCircle, Scale, Target, TrendingDown } from "lucide-react";

const WeightLoss = () => {
  const benefits = [
    "Sustainable weight loss without crash diets",
    "Personalized meal plans based on your lifestyle",
    "Regular monitoring and progress tracking",
    "Healthy relationship with food",
    "Long-term lifestyle changes",
    "Professional guidance and support",
  ];

  const features = [
    {
      icon: Scale,
      title: "Balanced Approach",
      description:
        "No extreme restrictions, just balanced nutrition that works for your body",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description:
        "Clear targets with realistic timelines to achieve your ideal weight",
    },
    {
      icon: TrendingDown,
      title: "Proven Results",
      description:
        "Evidence-based methods with a track record of successful transformations",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Sustainable
                <span className="text-primary block">Weight Management</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Transform your body and health with our proven weight management
                program. Lose weight the healthy way with personalized nutrition
                plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  Start Your Journey
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  View Success Stories
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80"
                alt="Weight Loss Consultation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Our Program?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our weight management program is designed for sustainable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
              What You'll Get
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands who have successfully achieved their weight goals
            with our guidance
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Book Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WeightLoss;
