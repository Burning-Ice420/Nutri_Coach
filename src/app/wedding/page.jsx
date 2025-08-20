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
import { CheckCircle, Calendar, Star, Sparkles } from "lucide-react";
import { useState } from "react";

const Wedding = () => {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
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

  const weddingPlans = [
    { title: "10 Days Trial Plan", price: "₹399" },
    { title: "1 Month Plan", price: "₹4999" },
    { title: "2 Months Plan", price: "₹7999" },
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
                Wedding
                <span className="text-primary block">Diet Plans</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Look stunning on your special day with our customized
                pre-wedding nutrition plans. Achieve your dream look with
                healthy, sustainable methods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4"
                  onClick={() => {
                    window.location.href = "/wedding#plans-section";
                  }}
                >
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
                src="/services/wedding.jpeg"
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

      {/* Plans Section - moved before Footer, improved CSS */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Wedding Diet Plans
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our customized pre-wedding nutrition plans for your big
            day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {weddingPlans.map((plan, idx) => (
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
          type="Wedding"
        />
      </section>
      <Footer />
    </div>
  );
};

export default Wedding;
