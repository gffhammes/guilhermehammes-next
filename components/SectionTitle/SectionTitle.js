import React from 'react';
import { Link } from 'react-scroll';

const ALIGNMENTS = ['align--left', 'align--center', 'align--right'];

const SectionTitle = ({
  textAlign,
  title,
  subtitle
}) => {
  const checkAlign = ALIGNMENTS.includes(textAlign) ? textAlign : ALIGNMENTS[0];

  return (
    <div className={`title ${checkAlign}`}>
      <span>{'<'+subtitle+' />'}</span>
      <h2>{title}</h2>
    </div>
  )
}

export default SectionTitle
