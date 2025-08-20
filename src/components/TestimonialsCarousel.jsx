import React from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    photo:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ravi Kumar",
    photo:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Anita Desai",
    photo:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Client Transformations
        </h2>
        <div className="flex gap-8 justify-center items-center overflow-x-auto pb-4">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[160px]">
              <img
                src={testimonial.photo}
                alt={testimonial.name + " transformation"}
                className="w-40 h-40 rounded-2xl object-cover shadow-lg border-4 border-primary mb-2"
              />
              <span className="font-semibold text-lg text-primary text-center">
                {testimonial.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
