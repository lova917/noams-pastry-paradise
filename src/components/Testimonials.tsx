
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Local Foodie",
      content: "The pistachio croissants at Noam's are absolutely divine! The balance of flavors and the perfect flaky texture keep me coming back every weekend.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Pastry Enthusiast",
      content: "The chocolate-pistachio twist is a masterpiece! I've tried pastries all over the city, and nothing compares to the quality and taste that Noam's delivers.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Coffee Shop Owner",
      content: "As someone in the industry, I appreciate the craftsmanship that goes into each pastry. The attention to detail and consistent quality is remarkable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-chocolate text-cream">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title text-cream">What Our Customers Say</h2>
          <p className="section-subtitle text-cream-light max-w-3xl mx-auto">
            Don't just take our word for it - hear from our happy customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-chocolate-light rounded-lg p-6 shadow-lg relative"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-cream">{testimonial.name}</h3>
                    <p className="text-cream-light text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
              <p className="text-cream-light italic">"{testimonial.content}"</p>
              <div className="absolute -top-4 -left-4 text-5xl text-cream-light opacity-20">"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
