'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';

const drawerWidth = 240;

export default function TopBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleNavClick = (path: string) => {
    router.push(path);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        FRIENDS WITH ELEPHANTS
      </Typography>
      <Divider />
      <nav aria-label="main nav">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavClick('/')}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavClick('/about')}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavClick('/media')}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Media" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavClick('/live')}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Live" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavClick('/contact')}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav" position='sticky' sx={{ backgroundColor: '#529189'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' }
            }}
          >
            <img src="https://images.squarespace-cdn.com/content/5aceb3075ffd20be26cc1d42/64f0dfcb-b37a-4640-90dd-62cef32bc587/logo.jpg" alt="FWE Logo" height={30} width={30} onClick={() => router.push('/')}/>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button onClick={() => handleNavClick('/')}>Home</Button>
            <Button onClick={() => handleNavClick('/about')}>About</Button>
            <Button onClick={() => handleNavClick('/media')}>Media</Button>
            <Button onClick={() => handleNavClick('/live')}>Live</Button>
            <Button onClick={() => handleNavClick('/contact')}>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}