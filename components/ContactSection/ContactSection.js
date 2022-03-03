import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle'
import Button from '../Button/Button'
import ContactCard from '../ContactCard/ContactCard'
import { WhatsAppIcon, TelephoneIcon } from '../../src/Icons/icons';



function ContactSection() {
  return (
    <section id='contact__section'>
      <div className="container">
      <WhatsAppIcon fillColor="#444" />
      <TelephoneIcon fillColor="#444" />
        <SectionTitle
          textAlign='align--left'
          subtitle='contato'
          title='vamos tomar um café?'
        />
        <div className="contact-cards">
          <ContactCard
            cardName={'WhatsApp'}
            targetLink={'https://wa.me/554792569136'}
            iconClass={'fab fa-whatsapp'}
          />
          <ContactCard
            cardName={'Telefone'}
            targetLink={'tel:47992569136'}
            iconClass={'far fa-phone-alt'}
          />
          <ContactCard
            cardName={'E-mail'}
            targetLink={'mailto:gffhammes@gmail.com'}
            iconClass={'far fa-envelope'}
          />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
