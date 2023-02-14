import React from 'react';
import InfoFragment from '../components/InfoFragment';
import infoFragments from '../data/infoFragments';

function Home() {
  return (
    <main className='home'>
      <section className='home__hero'>
        <h1>Our Love Story</h1>

        <img src='http://via.placeholder.com/300' alt='' />
      </section>

      <section className='home__party'>
        <div className='home__date'>
          <span>25</span>
          <span>03</span>
          <span>23</span>
        </div>
      </section>

      <InfoFragment {...infoFragments[0]} />
      <InfoFragment {...infoFragments[1]} />
    </main>
  );
}

export default Home;
