import React from 'react';
import Button from '../Button/Button';

const PortfolioItem = ({
  imgPath,
  title,
  resume,
  stacks,
  siteAddress
}) => {  
  return (
    <div className="portfolio-item">
      <img src={imgPath} alt={title} />
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
