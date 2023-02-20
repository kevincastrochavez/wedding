import React, { useEffect } from 'react';

import GalleryOne from '../assets/galleryOne.jpg';
import GalleryTwo from '../assets/galleryTwo.jpg';
import GalleryThree from '../assets/galleryThree.jpg';
import GalleryFour from '../assets/galleryFour.jpg';
import GalleryFive from '../assets/galleryFive.jpg';
import GallerySix from '../assets/gallerySix.jpg';
import GallerySeven from '../assets/gallerySeven.jpg';
import GalleryEight from '../assets/galleryEight.jpg';
import GalleryNine from '../assets/galleryNine.jpg';

function Gallery() {
  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className='gallery'>
      <h1>Gallery</h1>

      <img src={GalleryOne} alt='Picture' />
      <img src={GalleryTwo} alt='Picture' />
      <img src={GalleryThree} alt='Picture' />
      <img src={GalleryFour} alt='Picture' />
      <img src={GalleryFive} alt='Picture' />
      <img src={GallerySix} alt='Picture' />
      <img src={GallerySeven} alt='Picture' />
      <img src={GalleryEight} alt='Picture' />
      <img src={GalleryNine} alt='Picture' />
    </main>
  );
}

export default Gallery;
