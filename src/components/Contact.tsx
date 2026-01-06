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
      icon: <Mail className="text-cyan-400" size={24} />,
      title: "Email",
      value: "yahya.shanaah@gmail.com",
      link: "mailto:yahya.shanaah@gmail.com",
    },
    {
      icon: <Phone className="text-cyan-400" size={24} />,
      title: "Phone",
      value: "+971 5 4343 1993",
      link: "tel:+971543431993",
    },
    {
      icon: <MapPin className="text-cyan-400" size={24} />,
      title: "Location",
      value: "Dubai, United Arab Emirates",
      link: "https://maps.google.com",
    },
  ];

  return (
    // Updated background to match the Carousel's gradient
    <section id="contact" className="w-full py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Updated Heading style */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              I'm open to full-time positions as well as exciting freelance
              opportunities with forward-thinking companies — especially those
              focused on impactful or innovative projects. If you have a
              proposal or any questions, feel free to reach out via the contact
              form.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.title === "Location" ? "_blank" : undefined}
                  rel={item.title === "Location" ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-6 group"
                >
                  <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form Card styled like the Project Cards */}
          <Card className="bg-slate-900/50 border-2 border-slate-700 shadow-2xl backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-800/50 border-slate-700 focus:border-cyan-400 focus:ring-cyan-400 text-white placeholder:text-slate-500 h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-800/50 border-slate-700 focus:border-cyan-400 focus:ring-cyan-400 text-white placeholder:text-slate-500 h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-slate-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-slate-800/50 border-slate-700 focus:border-cyan-400 focus:ring-cyan-400 text-white placeholder:text-slate-500 h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-slate-800/50 border-slate-700 focus:border-cyan-400 focus:ring-cyan-400 text-white placeholder:text-slate-500 min-h-[120px]"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
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