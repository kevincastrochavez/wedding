import React from 'react';

function InfoFragment({
  heading,
  subheadingOne,
  subheadingTwo,
  subheadingThree,
  description,
  linkText,
  link,
  className,
}) {
  return (
    <section className={`infoFragment ${className}`}>
      <h2>{heading}</h2>

      <div className='infoFragment__bar'></div>

      <div className='infoFragment__headings'>
        <h3>{subheadingOne}</h3>
        <h3>{subheadingTwo}</h3>
        <h3>{subheadingThree}</h3>
      </div>

      <p>{description}</p>

      <a href={link} target='_blank' rel='noreferrer'>
        {linkText}
      </a>
    </section>
  );
}

export default InfoFragment;
