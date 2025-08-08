import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github,
  Download,
  FileText
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);
    window.open(`mailto:ariranalyst@gmail.com?subject=${subject}&body=${body}`);
    
    toast({
      title: "Email Client Opened!",
      description: "Your email client has been opened with the message details.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/r-ari/",
      color: "text-blue-500"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/ari-r-1",
      color: "text-gray-400"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:ariranalyst@gmail.com",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 px-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto px-4">
            I'm always excited to discuss new opportunities, collaborate on projects,
            or simply connect with fellow data enthusiasts. Let's build something amazing together!
          </p>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-3d p-6 border-glass-border hover:shadow-glass">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg skill-icon pulse-glow">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Ari R.</p>
                      <p className="text-muted-foreground">ariranalyst@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="p-2 bg-accent/10 rounded-lg skill-icon pulse-glow">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Available for Remote Work</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="card-3d p-6 border-glass-border hover:shadow-glass">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="glass"
                      size="icon"
                      onClick={() => window.open(social.url, '_blank')}
                      className="group hover:scale-110 transition-all duration-300"
                    >
                      <social.icon className={`w-5 h-5 ${social.color} group-hover:scale-110 transition-transform`} />
                    </Button>
                  ))}
                </div>
              </Card>

              {/* Resume Download */}
              <Card className="card-3d p-6 border-glass-border hover:shadow-glass">
                <h3 className="text-xl font-semibold mb-4">Resume</h3>
                <p className="text-muted-foreground mb-4">
                  Download my complete resume for detailed information about my experience and qualifications.
                </p>
                <Button 
                  variant="glow" 
                  className="w-full group"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'Ari_R_Resume.pdf';
                    link.click();
                  }}
                >
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  Download Resume (PDF)
                </Button>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="card-3d p-6 border-glass-border hover:shadow-glass">
              <h3 className="text-2xl font-semibold mb-6 text-gradient-secondary">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="glow-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="glow-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    className="min-h-[120px] glow-primary"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  <Badge variant="secondary" className="mr-2">
                    <FileText className="w-3 h-3 mr-1" />
                    Available for hire
                  </Badge>
                  Typically responds within 24 hours
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;