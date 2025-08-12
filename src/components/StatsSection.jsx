import { Card, CardContent } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      number: "95%",
      label: "Success Rate",
      description: "Clients achieve their health goals"
    },
    {
      number: "4.8",
      label: "Average Rating", 
      description: "Based on client reviews"
    },
    {
      number: "6K+",
      label: "Success Stories",
      description: "And still going strong!"
    },
    {
      number: "#1",
      label: "Business Achievers",
      description: "News 18 Award Winner"
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 bg-secondary-foreground/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-secondary-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-secondary-foreground/80">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;