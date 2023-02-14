import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Box } from '@mui/system';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import Logo from '../assets/Logo.png';
import { useStateValue } from '../StateProvider';

function Header() {
  const [{ language }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);

  console.log(language);

  const toggleDrawer = (openAction) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(openAction);
  };

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
    <header className='header'>
      <Link to='/'>
        <img src={Logo} alt='Citlalli and Kevin initials' />
      </Link>

      <div className='header__translate'>
        <span
          className={language === 'en' ? 'header__active' : undefined}
          onClick={handleEnglish}
        >
          English
        </span>
        <div className='header__divider'></div>
        <span
          className={language === 'es' ? 'header__active' : undefined}
          onClick={handleSpanish}
        >
          Español
        </span>
      </div>

      <MenuIcon onClick={toggleDrawer(true)} />

      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
        <Box
          sx={{ width: 200 }}
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <Link to={'/'}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary='Home' />
                </ListItemButton>
              </ListItem>
            </Link>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ConfirmationNumberIcon />
                </ListItemIcon>
                <ListItemText primary='RSVP' />
              </ListItemButton>
            </ListItem>

            <Link to='gallery'>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CollectionsIcon />
                  </ListItemIcon>
                  <ListItemText primary='Gallery' />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </header>
  );
}

export default Header;
