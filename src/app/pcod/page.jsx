"use client";
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
import BuyPlanModal from "@/components/BuyPlanModal";
import { CheckCircle, Heart, Shield, Zap } from "lucide-react";
import { useState } from "react";

const PCOD = () => {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const benefits = [
    "Hormonal balance through nutrition",
    "Natural management of PCOD symptoms",
    "Weight management specific to PCOD",
    "Improved insulin sensitivity",
    "Reduced inflammation",
    "Better reproductive health",
  ];

  const features = [
    {
      icon: Heart,
      title: "Holistic Approach",
      description:
        "Address PCOD symptoms through comprehensive nutritional therapy",
    },
    {
      icon: Shield,
      title: "Natural Solutions",
      description: "Drug-free management using the power of proper nutrition",
    },
    {
      icon: Zap,
      title: "Energy Balance",
      description: "Restore energy levels and metabolic health",
    },
  ];

  const pcodPlans = [
    { title: "10 Days Trial Plan", price: "₹499" },
    { title: "1 Month Plan", price: "₹4500" },
    { title: "3 Months Plan", price: "₹11999" },
    { title: "6 Months Plan", price: "₹20000" },
    { title: "12 Months Plan", price: "₹35000" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative bg-gradient-hero py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                PCOD/PCOS
                <span className="text-primary block">Management</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Take control of your PCOD/PCOS with our specialized nutrition
                program. Natural, effective solutions for hormonal balance and
                wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4"
                  onClick={() => {
                    window.location.href = "/pcod#plans-section";
                  }}
                >
                  Start Your Healing
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/services/s1.png"
                alt="PCOD Management Consultation"
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
              Natural PCOD Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Evidence-based nutrition therapy for hormonal balance
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
              Your PCOD Solution Includes
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
            Take Control of Your Health
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let PCOD control your life. Start your journey to hormonal
            balance today.
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Book Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
      {/* Plans Section - moved before Footer, improved CSS */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            PCOD/PCOS Plans
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our specialized PCOD/PCOS management plans for your
            needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pcodPlans.map((plan, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border-0 bg-card flex flex-col justify-between"
            >
              <CardHeader className="text-center pb-0">
                <CardTitle className="text-2xl font-bold mb-2 text-primary">
                  {plan.title}
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground mb-4">
                  {plan.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  variant="default"
                  className="w-full text-lg py-3 rounded-xl"
                  onClick={() => {
                    setSelectedPlan(plan);
                    setOpen(true);
                  }}
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <BuyPlanModal
          open={open}
          setOpen={setOpen}
          selectedPlan={selectedPlan}
          type="PCOD"
        />
      </section>
    </div>
  );
};

export default PCOD;
