import React from 'react';

import { useStateValue } from '../StateProvider';
import InfoFragment from '../components/InfoFragment';

import DunesOne from '../assets/dunesOne.jpg';
import DunesTwo from '../assets/dunesTwo.jpg';
import GardensOne from '../assets/gardensOne.jpg';
import GardensTwo from '../assets/gardensTwo.jpg';

import infoFragmentsEn from '../data/infoFragmentsEn';
import infoFragmentsEs from '../data/infoFragmentsEs';

function Home() {
  const [{ language }] = useStateValue();

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

      {language === 'en' ? (
        <InfoFragment {...infoFragmentsEn[0]} />
      ) : (
        <InfoFragment {...infoFragmentsEs[0]} />
      )}

      {language === 'en' ? (
        <InfoFragment {...infoFragmentsEn[1]} />
      ) : (
        <InfoFragment {...infoFragmentsEs[1]} />
      )}

      <section className='home__pictures'>
        <span className='home__pictures-one'>
          {language === 'en' ? '04' : '08'}
        </span>
        <img
          className='home__pictures-two'
          src={DunesTwo}
          alt='Citlalli and Kevin hugging at the Sand Dunes'
        />
        <img
          className='home__pictures-three'
          src={DunesOne}
          alt='Citlalli and Kevin under the sunset at the Sand Dunes'
        />
        <span className='home__pictures-four'>
          {language === 'en' ? '08' : '04'}
        </span>
        <img
          className='home__pictures-five'
          src={GardensTwo}
          alt='Citlalli and Kevin looking at each other at the Ricks gardens'
        />
        <img
          className='home__pictures-six'
          src={GardensOne}
          alt='Kevin knelt down proposing to Citlalli with the Temple on the background'
        />
        <span className='home__pictures-seven'>23</span>
      </section>

      <section className='home__temple'>
        <div className='home__date'>
          <span>{language === 'en' ? '04' : '08'}</span>
          <span>{language === 'en' ? '08' : '04'}</span>
          <span>23</span>
        </div>
      </section>

      {language === 'en' ? (
        <InfoFragment {...infoFragmentsEn[2]} />
      ) : (
        <InfoFragment {...infoFragmentsEs[2]} />
      )}

      <img
        className='home__templeImg'
        src='http://via.placeholder.com/250'
        alt=''
      />
    </main>
  );
}

export default Home;
