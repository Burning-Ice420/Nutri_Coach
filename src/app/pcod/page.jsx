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

  const plans = [
    {
      title: "PCOS/PCOD 1 Month Plan",
      price: "₹4500",
      discount: "₹4000",
      offers: [
        "Specialized PCOS/PCOD diet plan",
        "Hormonal balance nutrition guidance",
        "Weekly progress tracking & adjustments",
        "WhatsApp support",
      ],
    },
    {
      title: "PCOS/PCOD 3 Months Plan",
      price: "₹11,999",
      discount: "₹9,999",
      offers: [
        "Comprehensive PCOS/PCOD reversal program",
        "Customized diet & workout plan",
        "Monthly hormonal health check-ins",
        "Unlimited chat support with a nutritionist",
        "Free PCOS-friendly recipe eBook",
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
                className="border-0 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center py-8 px-4 bg-card"
              >
                <div className="flex flex-col items-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-lg ${
                      index === 0
                        ? "bg-gradient-to-br from-primary to-accent"
                        : index === 1
                        ? "bg-gradient-to-br from-accent to-secondary"
                        : "bg-gradient-to-br from-secondary to-primary"
                    }`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary mb-2 text-center">
                    {feature.title}
                  </CardTitle>
                </div>
                <CardContent className="px-0">
                  <CardDescription className="text-center text-muted-foreground text-base">
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

      {/* Plans Section - moved before Footer, improved CSS */}
      <section id="plans-section" className="py-20 bg-background">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">PCOD Plans</h2>
          <p className="text-lg text-muted-foreground">
            Choose from our tailored weight loss plans designed to fit your
            goals and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="relative flex flex-col justify-between rounded-xl border shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Top Ribbon always visually on top */}
              <div
                className={`absolute top-0 left-0 right-0 z-10 text-center py-2 ribbon-shimmer text-white text-sm font-semibold rounded-t-xl ${
                  index === 0
                    ? "bg-emerald-400"
                    : index === 1
                    ? "bg-emerald-500"
                    : index === 2
                    ? "bg-emerald-600"
                    : "bg-emerald-700"
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
          type="PCOD"
        />
      </section>
      <Footer />
    </div>
  );
};

export default PCOD;
