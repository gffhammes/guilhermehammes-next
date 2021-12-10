import React from 'react';

const BenefitsItem = ({
  iconPath,
  title,
  text
}) => {  
  return (
    <div className="benefit-item">
      <img src={iconPath} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default BenefitsItem
