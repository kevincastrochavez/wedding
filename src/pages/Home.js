import React from 'react';

import { useStateValue } from '../StateProvider';
import InfoFragment from '../components/InfoFragment';
import infoFragments from '../data/infoFragments';

function Home() {
  const [{ language }] = useStateValue();

  console.log(language);

  return (
    <main className='home'>
      <section className='home__hero'>
        <h1>Our Love Story</h1>

        <img src='http://via.placeholder.com/300' alt='' />
      </section>

      <section className='home__party'>
        <div className='home__date'>
          <span>{language === 'en' ? '03' : '25'}</span>
          <span>{language === 'en' ? '25' : '03'}</span>
          <span>23</span>
        </div>
      </section>

      <InfoFragment {...infoFragments[0]} />
      <InfoFragment {...infoFragments[1]} />

      <section className='home__pictures'>
        <span className='home__pictures-one'>04</span>
        <img
          className='home__pictures-two'
          src='http://via.placeholder.com/250'
          alt=''
        />
        <img
          className='home__pictures-three'
          src='http://via.placeholder.com/250'
          alt=''
        />
        <span className='home__pictures-four'>08</span>
        <img
          className='home__pictures-five'
          src='http://via.placeholder.com/250'
          alt=''
        />
        <img
          className='home__pictures-six'
          src='http://via.placeholder.com/250'
          alt=''
        />
        <span className='home__pictures-seven'>23</span>
      </section>

      <section className='home__temple'>
        <div className='home__date'>
          <span>04</span>
          <span>08</span>
          <span>23</span>
        </div>
      </section>

      <InfoFragment {...infoFragments[2]} />

      <img
        className='home__templeImg'
        src='http://via.placeholder.com/250'
        alt=''
      />
    </main>
  );
}

export default Home;
