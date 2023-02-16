import React from 'react';

import Fest from '../assets/fest.jpg';

function Gallery() {
  return (
    <main className='gallery'>
      <img src={Fest} alt='Picture' />
      <img src={Fest} alt='Picture' />
      <img src={Fest} alt='Picture' />
      <img src={Fest} alt='Picture' />
    </main>
  );
}

export default Gallery;
