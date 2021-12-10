import React from 'react';
import { Link } from 'react-scroll';

const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
  children,
  btnSize,
  targetId,
  isRound,
  externalLink
}) => {
  const checkSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

  return (
    <Link
      activeClass="active"
      to={targetId}
      spy={true}
      smooth={true}
      className={`shadow-1 btn ${checkSize} ${isRound ? 'round' : ''}`}
      onClick={externalLink ? (() => window.open(externalLink, "_blank")) : null}
    >
      {children}
    </Link>
  )
}

export default Button
