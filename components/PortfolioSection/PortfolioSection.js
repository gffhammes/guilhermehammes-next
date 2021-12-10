import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle'
import PortfolioItem from '../PortfolioItem/PortfolioItem'

function PortfolioSection() {
  return (
    <section id='portfolio__section'>
      <div className="container">
        <SectionTitle
          textAlign='align--center'
          subtitle='portfolio'
          title='conheça o meu trabalho'
        />
        <div className="portfolio-items">
          <PortfolioItem
            imgPath='/images/portfolio-credestados.png'
            title='CredEstados'
            resume='Site responsivo para promotora de crédito de Balneário Camboriú/SC.'
            stacks={['HTML', 'SCSS', 'Javascript', 'ReactJs']}
            siteAddress={'https://credestados.com.br/'}
          />
          <PortfolioItem
            imgPath='/images/portfolio-don-toro.png'
            title='Don Toro'
            resume='Site responsivo para açougue de Joinville/SC.'
            stacks={['HTML', 'CSS', 'Javascript']}
            siteAddress={'https://dontoro.com.br/'}
          />
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
