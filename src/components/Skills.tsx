import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiPython, 
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAmazon,
  SiGit,
  SiFigma
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ]
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ]
  }
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-dark opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            variants={categoryVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        className="group flex flex-col items-center p-4 rounded-lg hover:bg-background/50 transition-all duration-300 cursor-pointer"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "var(--glow-cyan)"
                        }}
                      >
                        <motion.div
                          className="mb-3 p-3 rounded-xl bg-gradient-to-br from-background to-secondary group-hover:from-neon-cyan/10 group-hover:to-neon-purple/10 transition-all duration-300"
                          animate={{
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                        >
                          <IconComponent 
                            className="h-8 w-8 group-hover:scale-110 transition-transform duration-300"
                            style={{ color: skill.color }}
                          />
                        </motion.div>
                        
                        <span className="text-sm font-medium text-center group-hover:text-neon-cyan transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Level Indicators */}
          <motion.div
            variants={categoryVariants}
            className="mt-16 glass-card p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Experience Level
            </h3>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              {[
                { skill: "React & TypeScript", level: 95 },
                { skill: "Node.js & Express", level: 90 },
                { skill: "Database Design", level: 85 },
                { skill: "Cloud Architecture", level: 80 },
                { skill: "UI/UX Design", level: 75 },
              ].map((item, index) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-muted-foreground">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-neon rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.level}%` } : { width: 0 }}
                      transition={{
                        duration: 1,
                        delay: index * 0.2,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};