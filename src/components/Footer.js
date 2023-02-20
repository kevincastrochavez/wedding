import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useStateValue } from '../StateProvider';

function Footer() {
  const [{ language }] = useStateValue();
  const [width, setWidth] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        console.log('Removing');
      });
    };
  }, [window.innerWidth]);

  return (
    <footer
      className={`footer ${width >= 700 && 'footerDesktop'}`}
      id={`${location.pathname === '/gallery' && 'footerUp'}`}
    >
      <h2>{language === 'en' ? 'REMINDER' : 'RECORDATORIO'}</h2>

      <div className='footer__bar'></div>

      <section className='footer_reminder'>
        <h3>{language === 'en' ? 'Party' : 'Fiesta'}</h3>

        <p>
          {language === 'en'
            ? 'Saturday, March 25, 2023'
            : 'Sábado 25 de Marzo, 2023'}
        </p>
        <p>Rexburg, ID - 6:00pm</p>
      </section>

      <section className='footer_reminder'>
        <h3>{language === 'en' ? 'Sealing' : 'Sellamiento'}</h3>

        <p>
          {language === 'en'
            ? 'Saturday, April 8, 2023'
            : 'Sábado 8 de Abril, 2023'}
        </p>
        <p>
          {language === 'en'
            ? 'Mexico City, Mexico. Time pending'
            : 'CDMX, México. Hora pendiente'}
        </p>
      </section>
    </footer>
  );
}

export default Footer;
