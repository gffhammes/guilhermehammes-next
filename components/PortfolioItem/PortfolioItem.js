import React from 'react';
import Button from '../Button/Button';
import Image from 'next/image';

const PortfolioItem = ({
  imgPath,
  title,
  resume,
  stacks,
  siteAddress
}) => {  
  return (
    <div className="portfolio-item">
      <Image
        src={imgPath}
        alt={title}
        layout={'fixed'}
        height={'200'}
        width={'250'}
        priority={true}        
        objectFit={'contain'}
        objectPosition={'center center'}
      />
      <div className="content shadow-2">
        <h3>{title}</h3>
        <span>{resume}</span>
        <div className='stack-list'>
          {stacks.map((stack, index) => (
            <span key={index} className='stack-item'>{stack}</span>
          ))}
        </div>
        <Button externalLink={siteAddress}>{'conhecer >'}</Button>
      </div>
    </div>
  )
}

export default PortfolioItem
