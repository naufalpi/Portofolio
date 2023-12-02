import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          opacity: {
            value: 1, // Nilai opacity default
            random: true, // Membuat nilai opacity menjadi acak
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1, // Nilai opacity minimum saat animasi
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            enable: true, // Mengaktifkan pergerakan partikel
            direction: "none", // Arah pergerakan partikel (none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left, random)
            speed: 0.5, // Kecepatan pergerakan partikel
          },
          size: {
            value: 1,
          },
          
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
