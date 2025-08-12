import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Activity, Shield, HeartHandshake } from "lucide-react";


const Therapeutic = () => {
  const conditions = [
    "Diabetes management and blood sugar control",
    "Thyroid disorders and metabolic health",
    "High blood pressure and cardiovascular health",
    "Digestive disorders and gut health",
    "Fatty liver disease management",
    "Kidney health and renal diet therapy"
  ];

  const features = [
    {
      icon: Activity,
      title: "Medical Nutrition",
      description: "Evidence-based therapeutic nutrition for medical conditions"
    },
    {
      icon: Shield,
      title: "Disease Prevention",
      description: "Preventive nutrition strategies to reduce health risks"
    },
    {
      icon: HeartHandshake,
      title: "Doctor Collaboration",
      description: "Working alongside your healthcare team for optimal results"
    }
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
                Therapeutic
                <span className="text-primary block">Nutrition</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Medical nutrition therapy for chronic conditions. Specialized diet plans 
                for diabetes, thyroid, heart health, and other medical conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  Get Medical Support
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Learn About Conditions
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
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
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
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
            <h3 className="text-2xl font-bold mb-6 text-center">Conditions We Treat</h3>
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
            Work with our qualified dietitian to manage your health condition through proper nutrition.
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Book Medical Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Therapeutic;