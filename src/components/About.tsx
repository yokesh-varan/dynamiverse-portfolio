import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-dark opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative w-80 h-80 mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-neon rounded-2xl opacity-75"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div className="absolute inset-2 bg-background rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-neon rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate Full Stack Developer with over 5 years of experience 
                  creating digital solutions that make a difference. My journey began with 
                  a curiosity for how things work and evolved into a love for building 
                  beautiful, functional applications.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or sharing knowledge through 
                  tech talks and mentoring.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-neon-cyan" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-neon-purple" />
                  <span>5+ Years Experience</span>
                </div>
              </div>

              <motion.div
                className="pt-6"
                whileHover={{ scale: 1.02 }}
              >
                <Button variant="neon" size="lg" className="group">
                  <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "5+", label: "Years Experience" },
              { number: "20+", label: "Happy Clients" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center glass-card p-6 rounded-xl"
                whileHover={{ scale: 1.05, boxShadow: "var(--glow-cyan)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-3xl font-bold gradient-text mb-2">{stat.number}</h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};