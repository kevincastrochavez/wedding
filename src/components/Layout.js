import React, { useEffect, useState } from 'react';

import Home from '../pages/Home';
import SideBar from './SideBar';

function Layout() {
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
    <div className='layout'>
      {width >= 700 && <SideBar />}
      <Home isDesktop={width >= 700 && true} />
    </div>
  );
}

export default Layout;
