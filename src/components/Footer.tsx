
import { Facebook, Instagram, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-chocolate-dark text-cream-light pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold mb-4">Noam's Croissant</h3>
            <p className="mb-4 text-cream-light/80 max-w-sm">
              Handcrafted pastries made with love, bringing the authentic taste of 
              French baking traditions with our signature pistachio and chocolate flavors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-light hover:text-pistachio transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream-light hover:text-pistachio transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream-light hover:text-pistachio transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-cream-light/80 hover:text-pistachio transition-colors">
                  Our Pastries
                </a>
              </li>
              <li>
                <a href="#about" className="text-cream-light/80 hover:text-pistachio transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-cream-light/80 hover:text-pistachio transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cream-light/80 hover:text-pistachio transition-colors">
                  Visit Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-cream-light/80 hover:text-pistachio transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-light/80 hover:text-pistachio transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-light/80 hover:text-pistachio transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-light/80 hover:text-pistachio transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream-light/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-light/60 text-sm">
            &copy; {year} Noam's Croissant. All rights reserved.
          </p>
          <p className="text-cream-light/60 text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-pistachio" /> by a pastry enthusiast
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
