import React from 'react';

const ContactCard = ({
  targetLink,
  iconClass,
  cardName
}) => {
  return (
    <a className='contact-card shadow-1' href={targetLink} target={'_blank'} rel={"noreferrer"}>
      <div className="cover"></div>
      <i className={iconClass}></i>
      <h3>{cardName}</h3>
    </a>
  )
}

export default ContactCard
