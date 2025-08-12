import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, TrendingUp, Award } from "lucide-react";

const Careers = () => {
  const openings = [
    {
      title: "Junior Nutritionist",
      type: "Full-time",
      location: "Mumbai",
      experience: "1-2 years",
      description: "Join our team to help clients achieve their health goals through personalized nutrition plans."
    },
    {
      title: "Diet Counselor",
      type: "Part-time",
      location: "Remote",
      experience: "0-1 years",
      description: "Provide nutritional counseling and support to clients in their wellness journey."
    },
    {
      title: "Wellness Coach",
      type: "Full-time",
      location: "Mumbai",
      experience: "2-3 years",
      description: "Lead wellness programs and help clients maintain long-term healthy lifestyle changes."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement opportunities"
    },
    {
      icon: Users,
      title: "Great Team Culture",
      description: "Work with passionate professionals in a supportive environment"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Performance-based rewards and recognition programs"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Join Our
            <span className="text-primary block">Mission</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a team that's transforming lives through nutrition and wellness. 
            Help us make healthy living accessible to everyone.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a team passionate about making a difference in people's lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your perfect role in our growing team
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>📍 {job.location}</span>
                        <span>💼 {job.experience}</span>
                      </div>
                    </div>
                    <Button className="md:ml-4">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a perfect fit? We're always looking for talented individuals.
            </p>
            <Button variant="outline" size="lg">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;