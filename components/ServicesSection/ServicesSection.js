import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import ServicesCard from '../ServicesCard/ServicesCard';

function ServicesSection() {
  return (
    <section id='services__section'>
      <div className="container">
        <SectionTitle
          textAlign='align--left'
          subtitle='serviços'
          title='veja como posso ajudar o seu negócio'
        />
        <div className="services-cards">
        <ServicesCard
            title='site'
            text='O objetivo do site é posicionar sua marca no mundo digital. Num site você deve falar sobre o seu negócio, seu produto/serviço e disponibilizar meios de contato para o visitante, como WhatsApp, telefone e e-mail.'
          />
          <ServicesCard
            title='landing page'
            text='A landing page, ou página de captura, é a página que deve receber o tráfego de campanhas digitais. Nela você foca nos principais pontos e diferenciais do seu produto. Geralmente entrega algum material rico ao visitante em troca de seu e-mail.'
          />
          <ServicesCard
            title='hotsite'
            text='No hotsite você tem uma oportunidade de detalhar seu produto/serviço para uma promoção ou campanha específica. É um site mais simples e com prazo de validade.'
          />
          <ServicesCard
            title='e-commerce'
            text='O e-commerce, como o nome sugere, é uma loja virtual. Nela você pode comercializar seus produtos 24h por dia e 7 dias por semana por um custo muito baixo! '
          />
        </div>
        <Button targetId='contact__section'>{'contato >'}</Button>
      </div>
    </section>
  )
}

export default ServicesSection
