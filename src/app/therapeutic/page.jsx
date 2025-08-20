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
import { CheckCircle, Activity, Shield, HeartHandshake } from "lucide-react";
import { useState } from "react";

const Therapeutic = () => {
  const [open, setOpen] =useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/register-user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          frontEndClient: "Nutri_Coach",
          plantype: `Therapeutic - ${selectedPlan.title} (${selectedPlan.price})`,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSuccess("Submitted successfully!");
      setForm({ name: "", email: "", phoneNumber: "", goal: "" });
      setOpen(false);
    } catch (err) {
      setError("Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };
  const conditions = [
    "Diabetes management and blood sugar control",
    "Thyroid disorders and metabolic health",
    "High blood pressure and cardiovascular health",
    "Digestive disorders and gut health",
    "Fatty liver disease management",
    "Kidney health and renal diet therapy",
  ];

  const features = [
    {
      icon: Activity,
      title: "Medical Nutrition",
      description:
        "Evidence-based therapeutic nutrition for medical conditions",
    },
    {
      icon: Shield,
      title: "Disease Prevention",
      description: "Preventive nutrition strategies to reduce health risks",
    },
    {
      icon: HeartHandshake,
      title: "Doctor Collaboration",
      description: "Working alongside your healthcare team for optimal results",
    },
  ];

  const therapeuticPlans = [
    { title: "10 Days Trial Plan", price: "₹499" },
    { title: "1 Month Plan", price: "₹4500" },
    { title: "2 Months Plan", price: "₹9000" },
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
                Therapeutic
                <span className="text-primary block">Nutrition</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Medical nutrition therapy for chronic conditions. Specialized
                diet plans for diabetes, thyroid, heart health, and other
                medical conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  Get Medical Support
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Learn About Conditions
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/services/thera.jpg"
                alt="Therapeutic Nutrition Consultation"
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
              Medical Nutrition Therapy
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized nutrition support for chronic health conditions
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
              Conditions We Treat
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{condition}</span>
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
            Get Medical Nutrition Support
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Work with our qualified to manage your health condition through
            proper nutrition.
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Book Medical Consultation
          </Button>
        </div>
      </section>

      {/* Plans Section - moved before Footer, improved CSS */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Therapeutic Nutrition Plans
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our medical nutrition therapy plans for chronic
            conditions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {therapeuticPlans.map((plan, idx) => (
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
          type="Therapeutic"
        />
      </section>
      <Footer />
    </div>
  );
};

export default Therapeutic;
