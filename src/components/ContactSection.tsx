import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// **IMPORTANT: Replace this with your actual Web3Forms Access Key**
// It's highly recommended to use an environment variable for this key (e.g., process.env.NEXT_PUBLIC_WEB3FORMS_KEY)
const WEB3FORMS_ACCESS_KEY = "fd425c9f-2afd-4dc8-83f1-cac503094c68"; 

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Create FormData object from the form fields
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);
      formDataToSend.append("access_key", WEB3FORMS_ACCESS_KEY);

      // 2. Send the request to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      // 3. Process the response
      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent! 🎉",
          description: "Thank you for contacting us. We'll get back to you shortly.",
        });
        // Clear the form fields on successful submission
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        // Display a more specific error using the toast
        const errorMessage = data.message || "Something went wrong! Please try again.";
        console.error("Web3Forms Error:", errorMessage);
        toast({
          title: "Submission Failed ❌",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Network or Submission error:", error);
      toast({
        title: "Network Error 🔌",
        description: "Could not reach the submission server. Please check your connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Contact Us Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or services? Our team is ready to
            assist you with technical guidance and custom solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info (No changes) */}
          <div className="animate-fade-up">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Reach Out to Us
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Sri Lanka Headquarters
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    No. 176, Brookland Estate, Thaldiyawala Road, 10150, Sri
                    Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Phone Numbers
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Sri Lanka: +94 77 759 9946
                    <br />
                    Canada: +1 437 260 9897
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    info@comtek.lk
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Business Hours
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Monday - Friday: 8:30 AM - 5:30 PM
                    <br />
                    Saturday: 8:30 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Cleaned up */}
          <div
            className="bg-card p-8 rounded-2xl shadow-comtek-md animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={onSubmit} className="space-y-4"> 
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Name *
                  </label>
                  <Input
                    placeholder="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message *
                </label>
                <Textarea
                  placeholder="How can we help you?"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                <Send className="h-4 w-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"} 
              </Button>
              
              {/* NOTE: The code that displayed the result text has been removed here. */}

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;