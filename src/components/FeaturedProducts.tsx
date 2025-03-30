
import { ChevronRight } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Classic Chocolate Croissant",
      description: "Buttery layers filled with rich dark chocolate, perfectly flaky and indulgent.",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
      featured: true,
      category: "chocolate"
    },
    {
      id: 2,
      name: "Pistachio Cream Croissant",
      description: "Delicate pastry filled with our signature pistachio cream and topped with crushed nuts.",
      image: "https://images.unsplash.com/photo-1630728245897-91c1017c578d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      featured: true,
      category: "pistachio"
    },
    {
      id: 3,
      name: "Chocolate Pistachio Twist",
      description: "Our signature fusion pastry combining rich chocolate and creamy pistachio in a twisted delight.",
      image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      featured: true,
      category: "fusion"
    },
    {
      id: 4,
      name: "Almond Pistachio Croissant",
      description: "Twice-baked croissant with almond cream and pistachio filling, dusted with powdered sugar.",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      featured: false,
      category: "pistachio"
    }
  ];

  const featuredProducts = products.filter(product => product.featured);

  return (
    <section id="products" className="section-padding bg-cream-light">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="section-title">Our Signature Pastries</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Handcrafted with traditional techniques and premium ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-pistachio-dark bg-pistachio-light/30 rounded-full capitalize">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-chocolate-dark mb-2">{product.name}</h3>
                <p className="text-chocolate mb-4">{product.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center font-medium text-pistachio-dark hover:text-pistachio transition-colors"
                >
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-primary">
            View All Pastries
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
