
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-cream-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Visit Our Bakery</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Stop by to experience our freshly baked delights in person
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342144!2d2.3354330157285906!3d48.87456397928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sRue%20des%20Martyrs%2C%2075009%20Paris%2C%20France!5e0!3m2!1sen!2s!4v1659020937441!5m2!1sen!2s" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Bakery Location"
              className="w-full"
            ></iframe>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-pistachio/20 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-pistachio-dark" />
                  </div>
                  <h3 className="font-bold text-chocolate-dark">Address</h3>
                </div>
                <p className="text-chocolate">123 Pastry Lane</p>
                <p className="text-chocolate">Bakery District</p>
                <p className="text-chocolate">New York, NY 10001</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-chocolate/20 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-chocolate" />
                  </div>
                  <h3 className="font-bold text-chocolate-dark">Hours</h3>
                </div>
                <p className="text-chocolate">Monday - Friday: 7am - 7pm</p>
                <p className="text-chocolate">Saturday: 8am - 8pm</p>
                <p className="text-chocolate">Sunday: 8am - 6pm</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-gold-dark" />
                  </div>
                  <h3 className="font-bold text-chocolate-dark">Phone</h3>
                </div>
                <p className="text-chocolate">(555) 123-4567</p>
                <p className="text-chocolate-light text-sm mt-2">Call us for special orders!</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-pistachio/20 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-pistachio-dark" />
                  </div>
                  <h3 className="font-bold text-chocolate-dark">Email</h3>
                </div>
                <p className="text-chocolate">hello@noamscroissant.com</p>
                <p className="text-chocolate-light text-sm mt-2">We'll respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
