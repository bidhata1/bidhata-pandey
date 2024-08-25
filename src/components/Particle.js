import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        "particles": {
          "number": {
            "value": 100
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle"
          },
          "opacity": {
            "value": 0.5
          },
          "size": {
            "value": 2
          },
          "line_linked": {
            "enable": false
          },
          "move": {
            "enable": true,
            "speed": 1
          }
        },
        "retina_detect": true
      }}
    />
  );
}

export default Particle;
