import React from "react";
import Button from "../Button/Button";
import Particles from "react-tsparticles";

function HeroSection() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <section id="hero__section">
      <Particles
        id="tsparticles"
        canvasClassName="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#102F9D",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "group",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#7990e6",
            },
            links: {
              color: "#7990e6",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
          fullScreen: false,
        }}
      />
      {/* <div className="overlay" />
      <video loop="true" autoPlay="autoplay" id="vid" muted>
        <source src={`/videos/guilherme-hammes.mp4`} type="video/mp4" />
      </video> */}
      <div className="container">
        <h1>
          <span>
            olá, eu sou
            <br />
            <strong>
              guilherme
              <br />
              hammes
            </strong>
            {" />"}
          </span>
          <p>
            <strong>desenvolvedor front-end</strong>
            <br />
            desenvolvo sites, landing pages, hotsites e e-commerces responsivos
            e otimizados para o Google
          </p>
          <Button btnSize="btn--large" targetId="contact__section">
            {"contato >"}
          </Button>
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
