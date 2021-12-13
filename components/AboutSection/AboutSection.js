import React from 'react';
import Image from 'next/image'
import SectionTitle from '../SectionTitle/SectionTitle'
import Button from '../Button/Button'

function AboutSection() {
  function currentAge() {
    var today = new Date();
    var birthday = new Date('15 sep 2000');
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }

    return age;
  };

  return (
    <section id='about__section' name='about__section'>
      <div className="container">
        <SectionTitle
          textAlign='align--left'
          subtitle='sobre-mim'
          title='quem sou eu'
        />
        <div className="photo-resume">
          <div className="photo">
            <Image
              src={'/images/guilherme-hammes.jpg'}
              alt={"Guilherme Hammes"}
              layout={'fill'}
            />
          </div>
          <div className="resume">
            <h3>Guilherme Hammes</h3>
            <p>{currentAge()} anos</p>
            <p>Joinville/SC</p>
            <a href="https://www.linkedin.com/in/guilherme-felipe-ferreira-hammes/" target={'_blank'} rel={"noreferrer"}><i className="fab fa-linkedin"></i></a>
            <a href="https://wa.me/554792569136" target={'_blank'} rel={"noreferrer"}><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div className="text">
          <p>Graduando em análise e desenvolvimento de sistemas na Udesc, sou um grande apaixonado por tecnologia, inovação e design.</p>

          <p>Estudo e aplico programação em meu trabalho desde 2016, criando automações e até sistemas utilizando a ferramenta Visual Basic for Applications, nativa do pacote Office.</p>

          <p>Em 2020, no entanto, colaborando em uma agência de marketing, tive meu primeiro contato com web design e descobri uma paixão por interfaces e programação front-end.</p>

          <p>Comecei a estudar e criar sites responsivos e otimizados para SEO utilizando HTML, CSS e Javascript e, em meados de 2021, decidi mergulhar nesse mundo e me desenvolver em ReactJs, meu foco atualmente.</p>
        </div>
        <Button targetId='contact__section'>{'contato >'}</Button>

      </div>
    </section>
  )
}

export default AboutSection
