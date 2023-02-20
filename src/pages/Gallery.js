import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import GalleryOne from '../assets/galleryOne.jpg';
import GalleryTwo from '../assets/galleryTwo.jpg';
import GalleryThree from '../assets/galleryThree.jpg';
import GalleryFour from '../assets/galleryFour.jpg';
import GalleryFive from '../assets/galleryFive.jpg';
import GallerySix from '../assets/gallerySix.jpg';
import GallerySeven from '../assets/gallerySeven.jpg';
import GalleryEight from '../assets/galleryEight.jpg';
import GalleryNine from '../assets/galleryNine.jpg';

import { useStateValue } from '../StateProvider';

function Gallery() {
  const [imagesArray, setImagesArray] = useState([]);
  const [{ language }] = useStateValue();

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
      <h1>{language === 'es' ? 'Gallery' : 'Galería'}</h1>

      {imagesArray?.map((image) => (
        <LazyLoadImage
          alt={
            'One of several images for the Gallery, featuring Citlalli and Kevin'
          }
          effect='blur'
          src={image}
        />
      ))}
    </main>
  );
}

export default Gallery;
