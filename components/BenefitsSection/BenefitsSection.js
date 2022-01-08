import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle'
import BenefitsItem from '../BenefitsItem/BenefitsItem'
import Button from '../Button/Button'

function BenefitsSection() {
  return (
    <section id='benefits__section'>
      <div className="container">
        <SectionTitle
          textAlign='align--center'
          subtitle='vantagens'
          title='saiba os diferenciais dos sites que eu desenvolvo'
        />
        <div className="benefits-items">
          <BenefitsItem
            iconPath='/images/icone-vantagens-01.png'
            title='Responsividade'
            text='Hoje em dia não dá para pensar em um site que fica lindo no computador, mas desfigurado nos celulares, tablets e televisores. Por isso, todos os sites são testados e ajustados para ficarem lindos em qualquer dispositivo :)'
          />
          <BenefitsItem
            iconPath='/images/icone-vantagens-02.png'
            title='Mobile first'
            text='O celular é o principal meio de acesso à internet de 90% dos brasileiros. Não faz sentido desenvolver um site para computador e adapta-lo para celulares. A experiência dos sites que eu desenvolvo é pensada para os celulares e adaptada para outros dispositivos.'
          />
          <BenefitsItem
            iconPath='/images/icone-vantagens-03.png'
            title='Desempenho'
            text='Utilizo uma tecnologia que permite alterar o conteúdo da página sem precisar recarrega-la, o que gera um aumento de desempenho absurdo para o seu site, diminuindo a taxa de rejeição e aumentando suas conversões.'
          />
          <BenefitsItem
            iconPath='/images/icone-vantagens-04.png'
            title='SEO'
            text='Além da velocidade de carregamento, os sites desenvolvidos em linha de código têm uma semântica mais organizada, o que ajuda muito no seu SEO. Cuido de pequenos detalhes como o uso de palavras-chave e acessibilidade, que contam para o desempenho.'
          />
        </div>
        <Button targetId='contact__section'>{'contato >'}</Button>
      </div>
    </section>
  )
}

export default BenefitsSection
