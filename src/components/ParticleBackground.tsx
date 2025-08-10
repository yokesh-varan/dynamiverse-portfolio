import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

interface ParticleBackgroundProps {
  theme?: "default" | "hero" | "projects" | "contact";
}

export const ParticleBackground = ({ theme = "default" }: ParticleBackgroundProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const getParticleConfig = () => {
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
          value: "#00FFFF",
        },
        links: {
          color: "#00FFFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
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
          value: 0.5,
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
            color: { value: ["#00FFFF", "#FF00FF", "#FF69B4"] },
            number: { ...baseConfig.particles.number, value: 80 },
            move: { ...baseConfig.particles.move, speed: 2 },
            size: { value: { min: 2, max: 5 } },
            links: {
              ...baseConfig.particles.links,
              color: "#FF00FF",
              opacity: 0.4,
            },
          },
        };
      
      case "projects":
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: { value: "#9D4EDD" },
            number: { ...baseConfig.particles.number, value: 30 },
            move: { ...baseConfig.particles.move, speed: 0.5 },
            links: {
              ...baseConfig.particles.links,
              color: "#9D4EDD",
              opacity: 0.2,
            },
          },
        };
      
      case "contact":
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: { value: "#00FF90" },
            number: { ...baseConfig.particles.number, value: 40 },
            move: { ...baseConfig.particles.move, speed: 1.5 },
            links: {
              ...baseConfig.particles.links,
              color: "#00FF90",
              opacity: 0.3,
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