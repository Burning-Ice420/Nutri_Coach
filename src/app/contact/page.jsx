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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 98765 43210",
      subtitle: "Call us anytime",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@dtpoonamsagar.com",
      subtitle: "24/7 support",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Mumbai, India",
      subtitle: "Visit our clinic",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Sat: 9AM-6PM",
      subtitle: "Sunday closed",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Get In
                <span className="text-primary block">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to start your health journey? Contact us today for a free
                consultation and take the first step towards a healthier you.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
                alt="Contact Us"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-lg mb-1">{info.details}</p>
                  <CardDescription>{info.subtitle}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-2">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Input
                      id="service"
                      placeholder="Weight Loss, PCOD, Wedding Plan, etc."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your health goals and how we can help you"
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button size="lg" className="w-full text-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
