import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, Settings, Users, Target } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Assessment",
      description: "Book a consultation with our experts & get the perfect roadmap to your health goals"
    },
    {
      icon: Settings,
      title: "Customize", 
      description: "Get a carefully designed plan that is personalized to your needs"
    },
    {
      icon: Users,
      title: "Follow up",
      description: "Check-in with your personal coach to monitor your progress and queries"
    },
    {
      icon: Target,
      title: "Results",
      description: "Achieve your results that is long-lasting with small but powerful changes in your lifestyle"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Unlock Your Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven 4-step process to help you achieve lasting health results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-primary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;