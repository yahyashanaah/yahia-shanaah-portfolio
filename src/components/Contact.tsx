import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs
    .send(
      "service_4sbckti",        
      "template_5ygyhxs",      
      formData,
      "UNbDW-NqNRL0HCU69"       
    )
    .then(
      () => {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      },
      (error) => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
        console.error("EmailJS Error:", error);
      }
    )
    .finally(() => {
      setIsSubmitting(false);
    });
};


  const contactInfo = [
    {
      icon: <Mail className="text-accent" size={24} />,
      title: "Email",
      value: "yahya.shanaah@gmail.com",
      link: "mailto:yahya.shanaah@gmail.com",
    },
    {
      icon: <Phone className="text-accent" size={24} />,
      title: "Phone",
      value: "+971 5 4343 1993",
      link: "tel:+971543431993",
    },
    {
      icon: <MapPin className="text-accent" size={24} />,
      title: "Location",
      value: "Dubai, United Arab Emirates",
      link: "https://maps.google.com/?q=Dubai,UAE",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-navy-dark bg-opacity-60">
      <div className="container">
        <h2 className="section-heading">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-slate mb-6">
              I'm open to full-time positions as well as exciting freelance
              opportunities with forward-thinking companies — especially those
              focused on impactful or innovative projects. If you have a
              proposal or any questions, feel free to reach out via the contact
              form.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.title === "Location" ? "_blank" : undefined}
                  rel={
                    item.title === "Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-start space-x-4 group"
                >
                  <div className="p-3 border border-navy-light rounded-md group-hover:border-accent transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-slate group-hover:text-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <Card className="bg-navy border border-navy-light shadow-none">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder=""
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-navy-light border-navy-light focus:border-accent text-white focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder=""
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-navy-light border-navy-light focus:border-accent text-white focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder=""
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-navy-light border-navy-light focus:border-accent text-white focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder=""
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-navy-light border-navy-light focus:border-accent text-white focus:ring-accent"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
