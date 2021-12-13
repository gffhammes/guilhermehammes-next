import React from 'react';
import Image from 'next/image';

const BenefitsItem = ({
  iconPath,
  title,
  text
}) => {  
  return (
    <div className="benefit-item">
      <Image
        src={iconPath}
        alt={title}
        width={'48'}
        height={'48'}
        layout={'fixed'}
        objectFit={'contain'}
      />
      <div className="content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default BenefitsItem
