
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-cream py-4 px-6 md:px-12 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="font-playfair text-2xl font-bold text-chocolate">
          Noam's Croissant
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-chocolate hover:text-pistachio transition-colors">
            Our Pastries
          </a>
          <a href="#about" className="text-chocolate hover:text-pistachio transition-colors">
            About Us
          </a>
          <a href="#testimonials" className="text-chocolate hover:text-pistachio transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-chocolate hover:text-pistachio transition-colors">
            Visit Us
          </a>
          <a href="#newsletter" className="btn-primary">
            Subscribe
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-chocolate"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-cream p-4 shadow-md">
          <div className="flex flex-col space-y-3">
            <a 
              href="#products" 
              className="text-chocolate hover:text-pistachio transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Pastries
            </a>
            <a 
              href="#about" 
              className="text-chocolate hover:text-pistachio transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#testimonials" 
              className="text-chocolate hover:text-pistachio transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-chocolate hover:text-pistachio transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Visit Us
            </a>
            <a 
              href="#newsletter" 
              className="btn-primary text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Subscribe
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
