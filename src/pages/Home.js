import React, { useEffect } from 'react';

import { useStateValue } from '../StateProvider';
import InfoFragment from '../components/InfoFragment';

import DunesOne from '../assets/dunesOne.jpg';
import DunesTwo from '../assets/dunesTwo.jpg';
import GardensOne from '../assets/gardensOne.jpg';
import GardensTwo from '../assets/gardensTwo.jpg';
import Dunes from '../assets/dunes.png';
import Temple from '../assets/temple.png';

import infoFragmentsEn from '../data/infoFragmentsEn';
import infoFragmentsEs from '../data/infoFragmentsEs';

function Home({ isDesktop }) {
  const [{ language }] = useStateValue();

  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className={`${isDesktop ? 'desktop' : 'home'}`}>
      <section className={`${isDesktop ? 'desktop__hero' : 'home__hero'}`}>
        <h1>Our Love Story</h1>

        <img src={Dunes} alt='Sand Dunes' />
      </section>

      <section className={`${isDesktop ? 'desktop__party' : 'home__party'}`}>
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
        <InfoFragment {...infoFragmentsEn[1]} className='infoFragment__two' />
      ) : (
        <InfoFragment {...infoFragmentsEs[1]} />
      )}

      <section
        className={`${isDesktop ? 'desktop__pictures' : 'home__pictures'}`}
      >
        <span
          className={`${
            isDesktop ? 'desktop__pictures-one' : 'home__pictures-one'
          }`}
        >
          {language === 'en' ? '04' : '08'}
        </span>
        <img
          className={`${
            isDesktop ? 'desktop__pictures-two' : 'home__pictures-two'
          }`}
          src={DunesTwo}
          alt='Citlalli and Kevin hugging at the Sand Dunes'
        />
        <img
          className={`${
            isDesktop ? 'desktop__pictures-three' : 'home__pictures-three'
          }`}
          src={DunesOne}
          alt='Citlalli and Kevin under the sunset at the Sand Dunes'
        />
        <span
          className={`${
            isDesktop ? 'desktop__pictures-four' : 'home__pictures-four'
          }`}
        >
          {language === 'en' ? '08' : '04'}
        </span>
        <img
          className={`${
            isDesktop ? 'desktop__pictures-five' : 'home__pictures-five'
          }`}
          src={GardensTwo}
          alt='Citlalli and Kevin looking at each other at the Ricks gardens'
        />
        <img
          className={`${
            isDesktop ? 'desktop__pictures-six' : 'home__pictures-six'
          }`}
          src={GardensOne}
          alt='Kevin knelt down proposing to Citlalli with the Temple on the background'
        />
        <span
          className={`${
            isDesktop ? 'desktop__pictures-seven' : 'home__pictures-seven'
          }`}
        >
          23
        </span>
      </section>

      <section className={`${isDesktop ? 'desktop__temple' : 'home__temple'}`}>
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
        className={`${isDesktop ? 'desktop__templeImg' : 'home__templeImg'}`}
        src={Temple}
        alt='Mexico City Temple'
      />
    </main>
  );
}

export default Home;
