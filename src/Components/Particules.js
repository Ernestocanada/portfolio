import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";

export default function ParticlesBackground() {
  return (
    <ParticleStyled>
      <Particles
        height={window.outerHeight}
        params={{
          particles: {
            number: {
              value: 100,
              density: { enable: true },
            },

            size: {
              value: 2.5,
            },
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onresize: {
                enable: true,
                density_auto: true,
                density_area: 4800, // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
              },
              onhover: {
                enable: true,
                mode: "repulse",
                detect_on: "window",
              },
              retina_detect: true,
            },
          },
        }}
      />
    </ParticleStyled>
  );
}

const ParticleStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
`;
