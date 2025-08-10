import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ParticleBackground } from "./ParticleBackground";
import { ExternalLink, Github, Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered E-Commerce Platform",
    description: "A modern e-commerce platform with AI-driven product recommendations, real-time chat support, and advanced analytics dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "OpenAI", "Stripe"],
    image: "/placeholder-project.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "Real-Time Collaboration Tool",
    description: "A collaborative workspace application with real-time editing, video conferencing, and project management features.",
    tech: ["Vue.js", "Socket.io", "MongoDB", "WebRTC", "Docker"],
    image: "/placeholder-project.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Cryptocurrency Trading Dashboard",
    description: "Advanced trading dashboard with real-time market data, portfolio tracking, and automated trading strategies.",
    tech: ["React", "TypeScript", "Chart.js", "WebSocket", "Redis"],
    image: "/placeholder-project.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 4,
    title: "Smart Home IoT Platform",
    description: "IoT platform for smart home automation with voice control, energy monitoring, and predictive maintenance.",
    tech: ["Angular", "Python", "MQTT", "InfluxDB", "AWS IoT"],
    image: "/placeholder-project.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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

  return (
    <section id="projects" className="py-20 relative">
      <ParticleBackground theme="projects" />
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing my latest work in web development, featuring cutting-edge technologies 
              and innovative solutions.
            </p>
            <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card className="glass-card border-border/20 overflow-hidden h-full">
                  <motion.div
                    className="relative aspect-video bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-neon opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-neon rounded-full opacity-50" />
                    </div>
                    
                    {/* Project overlay */}
                    <motion.div
                      className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Button variant="neon" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="glass" size="icon">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="glass" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </motion.div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-neon-cyan transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-2 py-1 text-xs bg-gradient-neon text-background rounded-full font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button variant="default" size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Button variant="glass" size="lg">
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};