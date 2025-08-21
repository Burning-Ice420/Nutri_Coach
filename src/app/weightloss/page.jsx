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
import { CheckCircle, Scale, Target, TrendingDown } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

const WeightLoss = () => {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("scrollToPlans") === "true"
    ) {
      localStorage.removeItem("scrollToPlans");
      setTimeout(() => {
        const el = document.getElementById("plans-section");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  }, []);
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const benefits = [
    "Sustainable weight loss without crash diets",
    "Personalized meal plans based on your lifestyle",
    "Regular monitoring and progress tracking",
    "Healthy relationship with food",
    "Long-term lifestyle changes",
    "Professional guidance and support",
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
  const plans = [
    {
      title: "7 Days Trial Plan",
      price: "₹250",
      offers: [
        "Kickstart your journey with a personalized meal plan",
        "WhatsApp support",
      ],
    },
    {
      title: "1 Month Plan",
      price: "₹3000",
      discount: "₹2500",
      offers: [
        "Weekly progress tracking",
        "Diet adjustments",
        "Free recipe eBook",
      ],
    },
    {
      title: "2 Months Plan",
      price: "₹4000",
      discount: "₹3500",
      offers: [
        "Custom workout guide",
        "Bi-weekly nutrition calls",
        "Exclusive access to our community",
      ],
    },
    {
      title: "3 Months Plan",
      price: "₹6000",
      discount: "₹5500",
      offers: [
        "Monthly body analysis",
        "Unlimited chat support",
        "Free supplement guide",
      ],
    },
  ];

  // Professional Guarantee Section

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
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Image */}
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
                <Button
                  size="lg"
                  className="text-lg px-8 py-4"
                  onClick={() => {
                    window.location.href = "/weightloss#plans-section";
                  }}
                >
                  Start Your Journey
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/services/weight.jpg"
                alt="Weight Loss Consultation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      {/* Guarantee Section */}
      <section className="py-16 bg-background">
        <div
          className="max-w-3xl mx-auto bg-gradient-to-r from-emerald-50 via-white to-emerald-50 
                  rounded-3xl shadow-xl p-10 flex flex-col items-center justify-center text-center relative overflow-hidden"
        >
          {/* Soft decorative glow */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-200/40 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-green-300/30 rounded-full blur-3xl"></div>

          {/* Badge */}
          <span
            className="px-4 py-1 text-xs font-semibold tracking-wide text-emerald-700 
                     bg-emerald-100 rounded-full mb-4 shadow-sm"
          >
            Our Professional Promise
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Weight Loss Management
          </h2>

          {/* Highlighted Guarantee */}
          <span className="text-4xl md:text-5xl font-extrabold text-emerald-600 mb-4 block">
            Guaranteed up to{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
              5 kgs*
            </span>
          </span>

          {/* Supporting text */}
          <p className="text-base md:text-lg text-muted-foreground max-w-lg">
            *Results may vary. Every plan is personalized with professional
            guidance and long-term sustainability in mind.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
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

      {/* Plans Section */}
      <section id="plans-section" className="py-20 bg-background">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Weight Loss Plans
          </h2>
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
          type="Weight Loss"
        />
      </section>

      <Footer />
    </div>
  );
};

export default WeightLoss;
