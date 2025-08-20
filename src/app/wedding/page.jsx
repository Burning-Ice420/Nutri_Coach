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
  const ribbons = [
    "LIMITED OFFER!",
    "MOST POPULAR!",
    "PREMIUM!",
    "MOST EFFECTIVE!",
  ];
  const ribbonColors = [
    "bg-emerald-600",
    "bg-orange-600",
    "bg-teal-600",
    "bg-orange-700",
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

  const plans = [
    {
      title: "Wedding 1 Month Plan",
      price: "₹4500",
      offers: [
        "Personalized wedding diet plan",
        "Weekly progress tracking",
        "WhatsApp support for quick queries",
      ],
    },
    {
      title: "Wedding 2 Months Plan",
      price: "₹6500",
      offers: [
        "Customized nutrition & workout plan",
        "Bi-weekly progress check-ins",
        "Skin & hair care diet guidance",
        "Free wedding-ready recipe guide",
      ],
    },
    {
      title: "Wedding 3 Months Plan",
      price: "₹9999",
      offers: [
        "Complete body transformation program",
        "Monthly body analysis & adjustments",
        "Unlimited chat & call support",
        "Stress management & lifestyle guidance",
        "Exclusive pre-wedding detox plan",
      ],
    },
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
                    window.location.href = "#plans-section";
                  }}
                >
                  Start Your Glow-Up
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                  onClick={() => {
                    window.location.href = "#plans-section";
                  }}
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

      {/* Plans Section - moved before Footer, improved CSS */}
      <section id="plans-section" className="py-20 bg-background">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Wedding Plans</h2>
          <p className="text-lg text-muted-foreground">
            Choose from our tailored wedding plans designed to fit your goals
            and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="relative flex flex-col justify-between rounded-xl border shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Top Ribbon */}
              <div
                className={`absolute top-0 left-0 right-0 text-center py-2 text-white text-sm font-semibold rounded-t-xl ${
                  ribbonColors[index % ribbonColors.length]
                }`}
              >
                {ribbons[index % ribbons.length]}
              </div>

              <CardContent className="pt-14 pb-6 px-6 flex flex-col h-full">
                {/* Title */}
                <h3 className="text-xl font-bold text-center mb-4">
                  {plan.title}
                </h3>

                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-3xl font-extrabold text-primary">
                    {plan.discount ? plan.discount : plan.price}
                  </span>
                  {plan.discount && (
                    <div className="text-lg line-through text-gray-400">
                      {plan.price}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 text-sm text-gray-700 flex-1">
                  {plan.offers?.map((offer, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>{offer}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button
                  variant="default"
                  className="w-full mt-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md hover:brightness-110 transition-all"
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
          type="Wedding Plan"
        />
      </section>
      <Footer />
    </div>
  );
};

export default Wedding;
