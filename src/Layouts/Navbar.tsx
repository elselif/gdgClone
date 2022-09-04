import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import {ListItemIcon } from '@mui/material';
import TryIcon from '@mui/icons-material/Try';
import PersonIcon from '@mui/icons-material/Person';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ContactsIcon from '@mui/icons-material/Contacts';
import RssFeedIcon from '@mui/icons-material/RssFeed';

interface Props {
  window?: () => Window;
}


const drawerWidth = 240;
const navItems = ['Home', 'Events', 'Team', 'Speakers', 'About', 'Contact', 'Blogs'];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 1 }}>
        GDG Istanbul
      </Typography>
      <Divider />
      <List >
        <ListItem sx={{ pl: 0 }}>
          <Link to={`/`} >
            <ListItemButton sx={{ width: 230, borderTopRightRadius: 50, borderBottomRightRadius: 50, }}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem sx={{ pl: 0 }}>
          <Link to={`/Events`} >
            <ListItemButton sx={{ width: 230, borderTopRightRadius: 50, borderBottomRightRadius: 50, }}>
              <ListItemIcon><TryIcon /></ListItemIcon>
              <ListItemText>Events</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem >
        <ListItem sx={{ pl: 0 }}>
          <Link to={`/Team`} >
            <ListItemButton sx={{ width: 230, borderTopRightRadius: 50, borderBottomRightRadius: 50, }}>
              <ListItemIcon><PersonIcon /></ListItemIcon>
              <ListItemText>Team</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem sx={{ pl: 0 }}>
          <Link to={`/Speakers`} >
            <ListItemButton sx={{ width: 230, borderTopRightRadius: 50, borderBottomRightRadius: 50, }}>
              <ListItemIcon><TryIcon /></ListItemIcon>
              <ListItemText>Speaker</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem sx={{ pl: 0 }}>
          <Link to={`/About`} >
            <ListItemButton sx={{ width: 230, borderTopRightRadius: 50, borderBottomRightRadius: 50, }}>
              <ListItemIcon><TextsmsIcon /></ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem sx={{ pl: 0 }}>
          <Link to={`/Contacts`} >
            <ListItemButton sx={{ width: 230, borderTopRightRadius: 50, borderBottomRightRadius: 50, }}>
              <ListItemIcon><ContactsIcon /></ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem sx={{ pl: 0 }}>
          <Link to={`/Blogs`} >
            <ListItemButton sx={{ width: 230, borderTopRightRadius: 50, borderBottomRightRadius: 50, }}>
              <ListItemIcon><RssFeedIcon /></ListItemIcon>
              <ListItemText>Blog</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;




  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
        <AppBar component="nav" color='secondary' >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { sm: 'flex' }, marginRight: 'auto' }}>
              <Typography
                color="primary"
                variant="h6"
                component="div"
                sx={{ flexGrow: 3, fontSize: 23, fontWeight: 'medium' }}>
                <Link to={`/`} >GDG Istanbul</Link>
              </Typography>
            </Box>
            <Box className='hidden tablet:block' sx={{ marginLeft: 'auto' }}>

              {navItems.map((item) => (
                <Link to={`/${item}`} >
                  <Button key={item} sx={{ letterSpacing: 1, fontWeight: 'regular', color: '#202020', marginX: '1px', cursor: "pointer", paddingX: 2, whiteSpace: 1, fontSize: 15, marginY: 2.5 }}>
                    {item}
                  </Button>
                </Link>
              ))}

            </Box>
            <Box sx={{ justifyContent: 'space-between', }}>
              <IconButton>
                <NotificationsIcon sx={{ color: '#737373', fontSize: 24, marginTop: '1px', }} />

              </IconButton>
              <span className='mx-3' />
              <IconButton>
                <Brightness4Icon sx={{ color: '#737373', fontSize: 24, marginTop: '1px', }} />

              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box sx={{ paddingBottom: 5 }}>
          <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#ffff',
    },
    error: {
      main: '#737373',
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});
