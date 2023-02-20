import { Link } from '@mui/material';
import React from 'react';

import Logo from '../assets/logo2.png';

function SideBar() {
  return (
    <div className='sidebar'>
      <Link to='/'>
        <img src={Logo} alt='Citlalli and Kevin initials' />
      </Link>

      <div className='sidebar__links'>
        <Link to='/gallery'>RSVP</Link>
        <Link to='/gallery'>Gallery</Link>
      </div>

      <p>Rexburg, ID</p>
    </div>
  );
}

export default SideBar;
