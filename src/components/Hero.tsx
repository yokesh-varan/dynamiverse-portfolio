import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "./ParticleBackground";
import { ChevronDown } from "lucide-react";

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#00FFFF"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
      />
    </Sphere>
  );
};

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground theme="hero" />
      
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="gradient-text">Alex</span>{" "}
                <span className="text-foreground">Johnson</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Full Stack Developer & Creative Technologist
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
            >
              I craft digital experiences that blend cutting-edge technology with stunning design. 
              Specializing in React, Node.js, and modern web technologies.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" className="group">
                View My Work
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-2"
                >
                  →
                </motion.div>
              </Button>
              
              <Button variant="glass" size="xl">
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex justify-center lg:justify-start space-x-6"
            >
              {["React", "Node.js", "TypeScript", "Python"].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="text-sm text-neon-cyan font-medium px-3 py-1 rounded-full border border-neon-cyan/30 glass-card"
                  whileHover={{ scale: 1.05, boxShadow: "var(--glow-cyan)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-96 lg:h-[500px] relative"
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <AnimatedSphere />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
            
            <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};