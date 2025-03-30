
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] bg-gradient-to-r from-cream to-cream-light overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative container mx-auto h-full flex flex-col justify-center px-6 md:px-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-chocolate-dark leading-tight">
            Artisanal Croissants <br/>
            <span className="text-pistachio-dark">Crafted with Love</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-chocolate">
            Indulge in our exquisite handcrafted pastries featuring the finest pistachio and chocolate ingredients. Each bite tells a story of tradition and passion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="btn-primary inline-flex items-center justify-center">
              Explore Our Pastries
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
              Visit Our Bakery
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-6">
            <div className="bg-cream/80 backdrop-blur-sm rounded-lg p-3 shadow-md">
              <p className="text-chocolate-dark font-bold">Fresh Daily</p>
              <p className="text-chocolate-light text-sm">Baked every morning</p>
            </div>
            <div className="bg-cream/80 backdrop-blur-sm rounded-lg p-3 shadow-md">
              <p className="text-chocolate-dark font-bold">Premium Ingredients</p>
              <p className="text-chocolate-light text-sm">Quality you can taste</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
