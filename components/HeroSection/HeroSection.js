import React from 'react';
import Button from '../Button/Button';

function HeroSection() {
  return (
    <section id='hero__section'>
      <div className="overlay" />
      <video loop="true" autoPlay="autoplay" id="vid" muted>
        <source src={`/videos/guilherme-hammes.mp4`} type="video/mp4" />
      </video>
      <div className="container">
        <h1>
          <span>olá, eu sou<br/>
          <strong>guilherme<br/>hammes</strong>{' />'}</span>
          <p>
            <strong>desenvolvedor front-end</strong><br/> 
            desenvolvo sites, landing pages, hotsites e e-commerces responsivos e otimizados para os motores de busca
          </p>
          <Button btnSize='btn--large' targetId='about__section'>{'saber mais >'}</Button>
        </h1>
      </div>      
    </section>
  )
}

export default HeroSection
