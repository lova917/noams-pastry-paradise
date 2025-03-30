
import { useState } from "react";
import { Check, AlertCircle } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setMessage("Thank you for subscribing!");
      setEmail("");
    }, 500);
  };

  return (
    <section id="newsletter" className="section-padding bg-pistachio/20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Join Our Sweet Community</h2>
          <p className="section-subtitle mb-8">
            Subscribe to our newsletter for special offers, new flavor announcements, and baking tips
          </p>

          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus("idle");
              }}
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-lg border border-pistachio/30 focus:outline-none focus:ring-2 focus:ring-pistachio"
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1 px-4 py-2 bg-chocolate text-cream-light rounded-md hover:bg-chocolate-dark transition-colors"
            >
              Subscribe
            </button>
          </form>

          {status === "success" && (
            <div className="mt-4 flex items-center justify-center text-green-600">
              <Check className="h-5 w-5 mr-2" />
              <span>{message}</span>
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 flex items-center justify-center text-red-600">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span>{message}</span>
            </div>
          )}

          <p className="text-chocolate text-sm mt-6">
            We respect your privacy and will never share your information
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
