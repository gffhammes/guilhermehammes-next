import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle'
import Button from '../Button/Button'
import ContactCard from '../ContactCard/ContactCard'

function ContactSection() {
  return (
    <section id='contact__section'>
      <div className="container">
        <SectionTitle
          textAlign='align--left'
          subtitle='contato'
          title='vamos tomar um café e mudar o futuro do seu negócio?'
        />
        <div className="contact-cards">
          <ContactCard
            cardName={'WhatsApp'}
            targetLink={'https://wa.me/554792569136'}
            iconClass={'fab fa-whatsapp'}
          />
          <ContactCard
            cardName={'Telefone'}
            targetLink={'tel:4792569136'}
            iconClass={'far fa-phone-alt'}
          />
          <ContactCard
            cardName={'E-mail'}
            targetLink={'mailto:hello@guilhermehammes.com.br'}
            iconClass={'far fa-envelope'}
          />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
