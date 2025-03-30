
import { Award, Utensils, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-cream to-cream-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Our Story</h2>
            <p className="mb-6 text-chocolate">
              Noam's Croissant began as a small family bakery with a passion for traditional French pastries. 
              What started as a humble kitchen experiment has grown into a beloved neighborhood institution.
            </p>
            <p className="mb-6 text-chocolate">
              Our founder, Noam, studied the art of pastry making in Paris before bringing his expertise back home. 
              His vision was simple: create exceptional croissants using only the finest ingredients, with special 
              focus on rich chocolate and vibrant pistachio flavors.
            </p>
            <p className="mb-8 text-chocolate">
              Today, we continue this tradition of excellence, handcrafting each pastry with the same care and 
              attention to detail that has defined our bakery from the beginning.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-pistachio/20 rounded-full flex items-center justify-center mb-4">
                  <Utensils className="h-8 w-8 text-pistachio-dark" />
                </div>
                <h3 className="font-bold text-chocolate-dark">Artisanal</h3>
                <p className="text-sm text-chocolate">Handcrafted daily</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-chocolate/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-chocolate" />
                </div>
                <h3 className="font-bold text-chocolate-dark">Award-Winning</h3>
                <p className="text-sm text-chocolate">Local favorite</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-gold-dark" />
                </div>
                <h3 className="font-bold text-chocolate-dark">Community</h3>
                <p className="text-sm text-chocolate">Family owned</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1590579491491-05c6f2d1999a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Baker working with dough"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-pistachio/20 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-chocolate/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
