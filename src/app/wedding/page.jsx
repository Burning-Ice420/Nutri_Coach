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
import { CheckCircle, Calendar, Star, Sparkles } from "lucide-react";

const Wedding = () => {
  const benefits = [
    "Pre-wedding glow and radiance",
    "Healthy weight loss for the big day",
    "Energy for wedding preparations",
    "Clearer, glowing skin",
    "Confidence boost for photos",
    "Post-wedding maintenance plan",
  ];

  const features = [
    {
      icon: Calendar,
      title: "Timeline-Based",
      description: "Customized plans based on your wedding timeline and goals",
    },
    {
      icon: Star,
      title: "Bridal Glow",
      description: "Nutrition for radiant skin and natural beauty enhancement",
    },
    {
      icon: Sparkles,
      title: "Stress Management",
      description: "Foods that help manage wedding stress and maintain energy",
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
                Wedding
                <span className="text-primary block">Diet Plans</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Look stunning on your special day with our customized
                pre-wedding nutrition plans. Achieve your dream look with
                healthy, sustainable methods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  Start Your Glow-Up
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  View Transformations
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80"
                alt="Wedding Diet Consultation"
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
              Your Perfect Wedding Look
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized nutrition for the most important day of your life
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
              Your Wedding Package Includes
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
            Be the Most Beautiful Bride
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your pre-wedding transformation journey and shine on your
            special day.
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

export default Wedding;
