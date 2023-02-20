import React, { useEffect, useState } from 'react';

import Gallery from '../pages/Gallery';
import Home from '../pages/Home';
import SideBar from './SideBar';

function Layout({ page }) {
  const [width, setWidth] = useState(0);

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
    <div className={`${width >= 700 && 'layout'}`}>
      {width >= 700 && <SideBar />}
      {page === 'Home' && <Home isDesktop={width >= 700 && true} />}
      {page === 'Gallery' && <Gallery />}
    </div>
  );
}

export default Layout;
