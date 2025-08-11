import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useTheme } from "next-themes";

interface ParticleBackgroundProps {
  theme?: "default" | "hero" | "projects" | "contact";
}

export const ParticleBackground = ({ theme = "default" }: ParticleBackgroundProps) => {
  const { theme: currentTheme } = useTheme();
  const isLight = currentTheme === "light";
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const getParticleConfig = () => {
    // Theme-based colors
    const colors = isLight 
      ? {
          primary: "#000000", // Black for light theme
          secondary: "#1a1a1a", // Dark gray for light theme
          accent: "#333333", // Medium gray for light theme
          success: "#000000", // Black for light theme
        }
      : {
          primary: "#00FFFF", // Cyan for dark theme
          secondary: "#FF00FF", // Magenta for dark theme
          accent: "#FF69B4", // Hot pink for dark theme
          success: "#00FF90", // Green for dark theme
        };
    
    const opacity = isLight ? 0.8 : 0.5;
    const linkOpacity = isLight ? 0.6 : 0.3;
    const baseConfig = {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: colors.primary,
        },
        links: {
          color: colors.primary,
          distance: 150,
          enable: true,
          opacity: linkOpacity,
          width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 50,
        },
        opacity: {
          value: opacity,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    };

    switch (theme) {
      case "hero":
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: { value: [colors.primary, colors.secondary, colors.accent] },
            number: { ...baseConfig.particles.number, value: 80 },
            move: { ...baseConfig.particles.move, speed: 2 },
            size: { value: { min: 2, max: 5 } },
            links: {
              ...baseConfig.particles.links,
              color: colors.secondary,
              opacity: linkOpacity + 0.1,
            },
          },
        };
      
      case "projects":
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: { value: colors.secondary },
            number: { ...baseConfig.particles.number, value: 30 },
            move: { ...baseConfig.particles.move, speed: 0.5 },
            links: {
              ...baseConfig.particles.links,
              color: colors.secondary,
              opacity: linkOpacity - 0.1,
            },
          },
        };
      
      case "contact":
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: { value: colors.success },
            number: { ...baseConfig.particles.number, value: 40 },
            move: { ...baseConfig.particles.move, speed: 1.5 },
            links: {
              ...baseConfig.particles.links,
              color: colors.success,
              opacity: linkOpacity,
            },
          },
        };
      
      default:
        return baseConfig;
    }
  };

  return (
    <Particles
      id={`particles-${theme}`}
      init={particlesInit}
      options={getParticleConfig()}
      className="absolute inset-0 z-0"
    />
  );
};