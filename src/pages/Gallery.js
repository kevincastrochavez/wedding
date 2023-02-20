import React, { useEffect, useState } from 'react';

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
  const [imagesArray, setImagesArray] = useState([]);

  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' });
    setImagesArray([
      GalleryOne,
      GalleryTwo,
      GalleryThree,
      GalleryFour,
      GalleryFive,
      GallerySix,
      GallerySeven,
      GalleryEight,
      GalleryNine,
    ]);
  }, []);

  return (
    <main className='gallery'>
      <h1>Gallery</h1>

      {imagesArray?.map((image) => (
        <img
          src={image}
          alt='One of several images for the Gallery, featuring Citlalli and Kevin'
        />
      ))}
    </main>
  );
}

export default Gallery;
