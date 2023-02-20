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
          Español
        </p>
        <p
          className={language === 'en' ? 'sidebar__active' : undefined}
          onClick={handleEnglish}
        >
          English
        </p>
      </div>

      <div className='sidebar__links'>
        <Link to='/'>RSVP</Link>
        <Link to='/gallery'>{language === 'en' ? 'GALLERY' : 'GALERÍA'}</Link>
      </div>

      <p>Rexburg, ID</p>
    </div>
  );
}

export default SideBar;
