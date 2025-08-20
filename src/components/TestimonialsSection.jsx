"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const response = [
    {
      id: 1,
      image: "/result/1.jpg",
    },
    {
      id: 2,
      image: "/result/2.jpg",
    },
    {
      id: 3,
      image: "/result/3.jpg",
    },
    {
      id: 4,
      image: "/result/4.jpg",
    },
    {
      id: 5,
      image: "/result/5.jpg",
    },
    {
      id: 6,
      image: "/result/6.jpg",
    },
    {
      id: 7,
      image: "/result/7.jpg",
    },
    {
      id: 8,
      image: "/result/8.jpg",
    },
    {
      id: 9,
      image: "/result/9.jpg",
    },
    {
      id: 10,
      image: "/result/10.jpg",
    },
  ];
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      weight: "Lost 15 kg",
      text: "Poonam's personalized diet plan transformed my life. I not only lost weight but gained confidence and energy!",
      rating: 5,
      photo:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Ravi Kumar",
      location: "Delhi",
      weight: "Lost 22 kg",
      text: "The PCOD management program helped me regulate my hormones naturally. Best decision ever!",
      rating: 5,
      photo:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Anita Desai",
      location: "Bangalore",
      weight: "Lost 12 kg",
      text: "Wedding diet plan made me look stunning on my special day. Thank you for the amazing support!",
      rating: 5,
      photo:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonials </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our Clients Share their Success Stories
          </p>
        </div>

        {/* Image-only carousel section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Client Transformations
          </h3>
          <div className="relative">
            <button
              type="button"
              aria-label="Scroll Left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:bg-primary/80"
              onClick={() => {
                document
                  .getElementById("carousel-scroll")
                  .scrollBy({ left: -400, behavior: "smooth" });
              }}
            >
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div
              id="carousel-scroll"
              className="flex gap-10 justify-center items-center overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
              style={{
                scrollBehavior: "smooth",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.dataset.hovering = "true";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.dataset.hovering = "false";
              }}
            >
              {response.map((response, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center min-w-[340px]"
                >
                  <img
                    src={response.image}
                    alt={" transformation"}
                    className="w-80 h-80 rounded-3xl object-cover shadow-2xl border-4 border-primary mb-3"
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              aria-label="Scroll Right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:bg-primary/80"
              onClick={() => {
                document
                  .getElementById("carousel-scroll")
                  .scrollBy({ left: 400, behavior: "smooth" });
              }}
            >
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <style>{`
              #carousel-scroll::-webkit-scrollbar { display: none; }
              .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
          </div>
        </div>
        {/* Auto-scroll effect */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            let interval = setInterval(() => {
              const el = document.getElementById('carousel-scroll');
              if (el && (!el.dataset.hovering || el.dataset.hovering === 'false')) {
                el.scrollBy({ left: 2, behavior: 'smooth' });
                if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
                  el.scrollTo({ left: 0, behavior: 'smooth' });
                }
              }
            }, 20);
          `,
          }}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name + " photo"}
                    className="w-20 h-20 rounded-full object-cover mb-2 shadow-md border-2 border-primary"
                  />
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4 text-center">
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                  <div className="mt-2 inline-block bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.weight}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
