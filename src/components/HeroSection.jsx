import { Button } from "@/components/ui/button";
import { Play, Smartphone } from "lucide-react";
import Image from "next/image";
import BuyPlanModal from "@/components/BuyPlanModal";
import { useState } from "react";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({
    title: "7 Days Trial",
    price: "₹250",
  });
  const handleFreeTrialClick = () => {
    setOpen(true);
  };
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your health{" "}
                <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
                  Journey
                </span>
                <br />
                With our expert{" "}
                <span className="text-secondary">Dietitian</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                Transform your life with personalized nutrition plans designed
                by expert Nutri Coach. Join thousands who have achieved lasting
                health results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="trial"
                size="lg"
                className="text-lg px-8 py-6"
                onClick={handleFreeTrialClick}
              >
                Start 7 days trial in just 250 rupees
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Explore Programs
              </Button>
            </div>

            {/* App Download Buttons */}
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground font-medium">
                Download Our App
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center space-x-3 bg-card border rounded-lg px-4 py-3 hover:shadow-md transition-shadow">
                  <Smartphone className="w-8 h-8 text-primary" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">GET IT ON</p>
                    <p className="font-semibold">Google Play</p>
                  </div>
                </button>
                <button className="flex items-center space-x-3 bg-card border rounded-lg px-4 py-3 hover:shadow-md transition-shadow">
                  <Smartphone className="w-8 h-8 text-primary" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">
                      Download on the
                    </p>
                    <p className="font-semibold">App Store</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/nutricoachofficial/"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <span className="text-primary font-bold">I</span>
              </a>
              <a
                href="https://www.youtube.com/@NutriCoachOffical"
                className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center hover:bg-destructive/20 transition-colors"
              >
                <Play className="w-5 h-5 text-destructive" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center hover:bg-secondary/20 transition-colors"
              >
                <span className="text-secondary font-bold">in</span>
              </a> */}
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/hero.png"
                alt="Nutri Coach"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-[60px] -right-[70px]   rounded-2xl p-4 ">
                <div className="text-center">
                  <Image
                    src="/logo.png"
                    width={150}
                    height={150}
                    alt="Nutri Coach"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BuyPlanModal
        open={open}
        setOpen={setOpen}
        selectedPlan={selectedPlan}
        type="Weight Loss"
      />
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="hsl(175 70% 50%)"
            d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,96C672,96,768,64,864,58.7C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
