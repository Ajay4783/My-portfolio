import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent", // ஏற்கனவே உள்ள Gradient தெரியணும், அதனால Transparent
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // மவுஸ் கிட்ட போனா விலகிப் போகும்
            },
            onClick: {
              enable: true,
              mode: "push", // கிளிக் பண்ணா புதுசா உருவாகும்
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff", // வெள்ளை நிற புள்ளிகள்
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2, // மெல்லிய கோடுகள்
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.5, // மிதக்கும் வேகம்
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60, // மொத்த புள்ளிகளின் எண்ணிக்கை
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1 // இது மிக முக்கியம்! (எல்லாத்துக்கும் பின்னாடி இருக்கணும்)
      }}
    />
  );
};

export default ParticlesBackground;