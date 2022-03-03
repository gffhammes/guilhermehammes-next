import React from "react";
import { Link } from "react-scroll";

const SIZES = ["btn--medium", "btn--large"];

const Button = ({
  children,
  backgroundColor,
  color,
  btnSize,
  targetId,
  isRound,
  externalLink,
}) => {
  const checkSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];
  const checkBgColor = backgroundColor ? backgroundColor : "#FF9900";
  const checkColor = color ? color : "#444";

  return (
    <Link
      style={{ backgroundColor: checkBgColor, color: checkColor }}
      activeClass="active"
      to={targetId}
      spy={true}
      smooth={true}
      className={`shadow-1 btn ${checkSize} ${isRound ? "round" : ""}`}
      onClick={externalLink ? () => window.open(externalLink, "_blank") : null}
    >
      {children}
    </Link>
  );
};

export default Button;
