import { Link } from 'react-router-dom';
import React from 'react';

import { useStateValue } from '../StateProvider';
import Logo from '../assets/logo2.png';

function SideBar() {
  const [{ language }, dispatch] = useStateValue();

  const handleSpanish = () => {
    dispatch({
      type: 'CHANGE_TO_SPANISH',
      language: 'es',
    });
  };

  const handleEnglish = () => {
    dispatch({
      type: 'CHANGE_TO_ENGLISH',
      language: 'en',
    });
  };

  return (
    <div className='sidebar'>
      <Link to='/'>
        <img src={Logo} alt='Citlalli and Kevin initials' />
      </Link>

      <div className='sidebar__translation'>
        <p
          className={language === 'es' ? 'sidebar__active' : undefined}
          onClick={handleSpanish}
        >
          ESPAÑOL
        </p>
        <p
          className={language === 'en' ? 'sidebar__active' : undefined}
          onClick={handleEnglish}
        >
          ENGLISH
        </p>
      </div>

      <div className='sidebar__links'>
        <a
          href='https://citlalliandkevin.rsvpify.com/rsvp-page-preview/310358?signature=cf620de22ff400f707cb098dc103a4aa6f1af3014bffa9a0c641071718e99ee8'
          target='_blank'
          rel='noreferrer'
        >
          RSVP
        </a>
        <Link to='/gallery'>{language === 'en' ? 'GALLERY' : 'GALERÍA'}</Link>
      </div>

      <p>REXBURG, ID</p>
    </div>
  );
}

export default SideBar;
