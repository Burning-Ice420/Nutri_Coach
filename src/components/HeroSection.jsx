"use client";

import { Button } from "@/components/ui/button";
import { Play, Smartphone, TrendingUp, Users, Award } from "lucide-react";
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
      {/* Navigation Bar */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[75vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:pr-12">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
                Transform Your Health{" "}
                <span className="text-primary">Journey with</span>
                <br />
                <span className="text-secondary">NutriCoach.</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                We provide personalized nutrition plans and expert guidance to
                help you achieve lasting health results and transform your
                lifestyle.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="relative overflow-hidden text-base px-8 py-4 
             bg-gradient-to-r from-primary to-primary/90 
             hover:from-primary/90 hover:to-primary 
             text-white rounded-full font-semibold 
             shadow-lg hover:shadow-xl 
             transition-all duration-300 ease-in-out 
             flex items-center justify-center gap-2 group"
                onClick={handleFreeTrialClick}
              >
                <span>Start your 7-day trial for just</span>

                {/* Shimmer Price */}
                <span
                  className="relative font-extrabold text-lg bg-clip-text text-transparent 
                   bg-gradient-to-r from-amber-300 via-white to-amber-300 
                   animate-shimmer bg-[length:200%_100%]"
                >
                  ₹250
                </span>

                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
              <Button
                onClick={() => (window.location.href = "/weightloss")}
                className="relative font-extrabold text-lg px-8 py-4 bg-primary rounded-4xl text-white 
                   "
              >
                Explore Weight Plans
              </Button>
            </div>

            {/* App Download Buttons */}
            <div className="space-y-4 pt-4">
              <p className="text-sm text-gray-500 font-medium">
                Download Our App
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg px-4 py-3 hover:shadow-md transition-shadow">
                  <Smartphone className="w-8 h-8 text-secondary" />
                  <div className="text-left">
                    <p className="text-xs text-gray-500">GET IT ON</p>
                    <p className="font-semibold text-gray-800">Google Play</p>
                  </div>
                </button>
                <button className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg px-4 py-3 hover:shadow-md transition-shadow">
                  <Smartphone className="w-8 h-8 text-secondary" />
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Download on the</p>
                    <p className="font-semibold text-gray-800">App Store</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/nutricoachofficial/"
                className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors"
              >
                <span className="text-secondary font-bold">I</span>
              </a>
              <a
                href="https://www.youtube.com/@NutriCoachOffical"
                className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
              >
                <Play className="w-5 h-5 text-red-600" />
              </a>
            </div>
          </div>

          {/* Right Column - Hero Image with Floating Elements */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10">
              {/* Main Hero Image */}
              <div className="relative w-[200px] h-96 lg:w-full lg:h-[500px]">
                <img
                  src="/hero.png"
                  alt="Professional nutritionist"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />

                {/* Floating Statistics Circle - Top Right */}
                <div className="absolute -top-6 -right-6 w-30 h-30 bg-teal-700 border-6 border-white rounded-full flex flex-col items-center justify-center text-white shadow-xl">
                  <TrendingUp className="w-6 h-6 mb-1 text-accent" />
                  <span className="text-xl font-bold text-accent">98%</span>
                  <span className="text-xs">Success</span>
                </div>

                {/* Floating Icon Circle - Left Side */}
                <div className="absolute top-1/3 -left-6 w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <Award className="w-8 h-8 text-accent" />
                </div>

                {/* Floating Profile Circle - Bottom Left */}
                {/* <div className="absolute -bottom-6 left-6 w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <img
                    src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Client testimonial"
                    className="w-full h-full object-cover"
                  />
                </div> */}

                {/* Logo positioned at top left */}
                <div className="absolute -top-8 -left-8">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">NC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-100 rounded-full opacity-40 -z-10"></div>
            <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-secondary/10 rounded-full opacity-40 -z-10"></div>
          </div>
        </div>
      </div>

      <BuyPlanModal
        open={open}
        setOpen={setOpen}
        selectedPlan={selectedPlan}
        type="Weight Loss"
      />
    </section>
  );
};

export default HeroSection;
