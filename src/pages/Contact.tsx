import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_68vju7d', // Service ID
        'template_d4gbobz', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'TFwZ4pN6ljOWM6Sr7' // Public Key
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "catherine.gitema@email.com",
      link: "mailto:catherine.gitema@email.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+254 7XX XXX XXX",
      link: "tel:+254700000000"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Nairobi, Kenya",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub", 
      url: "#",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always excited to discuss new projects, opportunities, or just have a conversation 
            about science, technology, and the exciting possibilities that lie ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="p-8 bg-card-gradient border-0 shadow-card sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold mb-4 text-foreground">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-section rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Quick Response</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all inquiries within 24 hours during weekdays.
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card-gradient border-0 shadow-card">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me more about your project or inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Additional Information */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card-gradient border-0 shadow-card">
                <h3 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                  <span className="text-xl">💼</span>
                  Project Inquiries
                </h3>
                <p className="text-sm text-muted-foreground">
                  Looking for web development services? I'd love to hear about your project 
                  and discuss how we can bring your vision to life.
                </p>
              </Card>
              
              <Card className="p-6 bg-card-gradient border-0 shadow-card">
                <h3 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                  <span className="text-xl">🤝</span>
                  Collaboration
                </h3>
                <p className="text-sm text-muted-foreground">
                  Interested in collaborating or mentoring? I'm always open to learning 
                  from others and sharing knowledge in return.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;