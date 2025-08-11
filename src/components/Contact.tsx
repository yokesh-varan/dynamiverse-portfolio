import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ParticleBackground } from "./ParticleBackground";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { toast } from "sonner";

const socialLinks = [
  { 
    name: "GitHub", 
    icon: Github, 
    url: "https://github.com", 
    color: "#333",
    hoverColor: "#00FFFF"
  },
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    url: "https://linkedin.com", 
    color: "#0077B5",
    hoverColor: "#00FFFF"
  },
  { 
    name: "Twitter", 
    icon: Twitter, 
    url: "https://twitter.com", 
    color: "#1DA1F2",
    hoverColor: "#00FFFF"
  },
  { 
    name: "YouTube", 
    icon: Youtube, 
    url: "https://youtube.com", 
    color: "#FF0000",
    hoverColor: "#00FFFF"
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative">
      <ParticleBackground theme="contact" />
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
            <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                  
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                  
                  <Button 
                    type="submit" 
                    variant="neon" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Info */}
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Info</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">yokesxh12@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 9150333380</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Chennai</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Follow Me</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-all duration-300 group"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "var(--glow-cyan)"
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <IconComponent 
                          className="h-5 w-5 group-hover:text-neon-cyan transition-colors"
                          style={{ color: social.color }}
                        />
                        <span className="font-medium group-hover:text-neon-cyan transition-colors">
                          {social.name}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};