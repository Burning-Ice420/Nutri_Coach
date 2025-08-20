"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, Settings, Users, Target } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: ClipboardList,
    title: "Step 1: Assessment",
    description:
      "Begin with a comprehensive consultation where our experts analyze your lifestyle, health, and goals.",
    image: "/sei/1.png",
  },
  {
    icon: Settings,
    title: "Step 2: Personalize",
    description:
      "Receive a tailor-made plan with diet, workouts, and coaching built just for your unique needs.",
    image: "/sei/2.jpeg",
  },
  {
    icon: Users,
    title: "Step 3: Coaching",
    description:
      "Work closely with your dedicated health coach who monitors progress and answers your queries.",
    image: "/sei/3.jpg",
  },
  {
    icon: Target,
    title: "Step 4: Transformation",
    description:
      "Achieve sustainable results with small yet powerful lifestyle changes that last a lifetime.",
    image: "/sei/4.jpg",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Our Proven 4-Step Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured journey designed to take you from where you are today
            to where you want to be — healthier, stronger, and more confident.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-primary/40 to-primary/0 -translate-x-1/2" />

          <div className="grid gap-16 lg:gap-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image on one side */}
                  <div className="hidden lg:flex w-1/2 justify-center relative">
                    <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Card on the other side */}
                  <div className="w-full lg:w-1/2">
                    <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-card/90 backdrop-blur">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-primary/70 flex items-center justify-center shadow-md">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="text-2xl font-semibold tracking-tight">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
