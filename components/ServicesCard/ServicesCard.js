import React from 'react';

const ServicesCard = ({
  title,
  text
}) => {
  return (
    <a href={`https://wa.me/554792569136?text=${encodeURI(`Olá, gostaria de um orçamento para ${title}!`)}`} target={'_blank'}>
      <div className="services-card">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </a>
  )
}

export default ServicesCard
