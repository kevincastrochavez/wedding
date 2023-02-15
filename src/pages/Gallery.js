import React from 'react';

import Fest from '../assets/fest.jpg';

function Gallery() {
  return (
    <main className='gallery'>
      <div className='gallery__separator'></div>

      <div className='gallery__container'>
        <img src={Fest} alt='Picture' />
        <img src={Fest} alt='Picture' />
        <img src={Fest} alt='Picture' />
        <img src={Fest} alt='Picture' />
      </div>
    </main>
  );
}

export default Gallery;
