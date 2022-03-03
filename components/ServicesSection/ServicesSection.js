import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ServiceCard } from "../ServiceCard/ServiceCard";

function ServicesSection() {
  const services = [
    {
      serviceName: "LANDING PAGE",
      price: 997,
      listItems: [
        "Até 10 secções",
        "Layout + Desenvolvimento + Publicação",
        "Gestão de conteúdo com WordPress",
        "LP publicada em menos de 20 dias",
        "Domínio e hospedagem não inclusos",
      ],
      backgroundColor: "#e2e2e2",
      fontColor: "#444",
    },
    {
      serviceName: "SITE INSTITUCIONAL",
      price: 2197,
      listItems: [
        "Até 05 páginas",
        "Layout + Desenvolvimento + Publicação",
        "Gestão de conteúdo com WordPress",
        "Site publicado em menos de 30 dias",
        "Domínio e hospedagem não inclusos",
      ],
      backgroundColor: "#ff9900",
      fontColor: "#444",
    },
    {
      serviceName: "ECOMMERCE",
      price: 4997,
      listItems: [
        "Loja virtual de alta performance",
        "Layout + Desenvolvimento + Cadastro inicial de produtos + Publicação",
        "Gestão de conteúdo e produtos com WordPress",
        "Site publicado em menos de 60 dias",
        "Domínio e hospedagem não inclusos",
      ],
      backgroundColor: "#102F9D",
      fontColor: "#fff",
    },
  ];
  return (
    <section id="services__section">
      <div className="container">
        <SectionTitle
          textAlign="align--left"
          subtitle="serviços"
          title="veja como posso ajudar o seu negócio"
        />
        <div className="services-cards">
          <ServiceCard serviceData={services[0]} />
          <ServiceCard serviceData={services[1]} />
          <ServiceCard serviceData={services[2]} />
          {/* <ServicesCard
            title="site"
            text="O objetivo do site é posicionar sua marca no mundo digital. Num site você deve falar sobre o seu negócio, seu produto/serviço e disponibilizar meios de contato para o visitante, como WhatsApp, telefone e e-mail."
          />
          <ServicesCard
            title="landing page"
            text="A landing page, ou página de captura, é a página que deve receber o tráfego de campanhas digitais. Nela você foca nos principais pontos e diferenciais do seu produto. Geralmente entrega algum material rico ao visitante em troca de seu e-mail."
          />
          <ServicesCard
            title="hotsite"
            text="No hotsite você tem uma oportunidade de detalhar seu produto/serviço para uma promoção ou campanha específica. É um site mais simples e com prazo de validade."
          />
          <ServicesCard
            title="e-commerce"
            text="O e-commerce, como o nome sugere, é uma loja virtual. Nela você pode comercializar seus produtos 24h por dia e 7 dias por semana por um custo muito baixo! "
          /> */}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
