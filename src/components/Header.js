import React, { useState } from 'react';
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

function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (openAction) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(openAction);
  };

  const menuItems = ['Inbox', 'Starred', 'Send email', 'Drafts'];

  return (
    <header className='header'>
      <a href='/'>
        <img src={Logo} alt='Citlalli and Kevin initials' />
      </a>

      <div className='header__translate'>
        <span>English</span>
        <div className='header__divider'></div>
        <span>Español</span>
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
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ConfirmationNumberIcon />
                </ListItemIcon>
                <ListItemText primary='RSVP' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CollectionsIcon />
                </ListItemIcon>
                <ListItemText primary='Gallery' />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </header>
  );
}

export default Header;
