
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <FeaturedProducts />
      <About />
      <Testimonials />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
