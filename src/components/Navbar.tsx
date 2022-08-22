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






const theme = createTheme({
  palette: {
    primary:{
      main: '#212121',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#ffff',
    },
    error:{
      main:'#737373',
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

interface Props {
  window?: () => Window;
}


const drawerWidth = 240;
const navItems = ['Home', 'Events', 'Team','Speakers','About','Contact','Blogs'];

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
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  


  return (
    <ThemeProvider theme={theme}>
    <Box  sx={{ display: 'flex' , justifyContent: 'space-between'}}>
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
          <Box  sx={{ display:{sm:'flex'},marginRight:'auto'}}>
          <Typography
            color="primary"
            variant="h6"
            component="div"
            sx={{ flexGrow: 3,fontSize: 23,fontWeight: 'medium'}}>
            GDG Istanbul
          </Typography>
          </Box>
          <Box className='hidden tablet:block' sx={{ marginLeft:'auto'}}>
            {navItems.map((item) => (
              <Button key={item} sx={{ letterSpacing: 1 , fontWeight: 'regular',color: '#202020' ,marginX:'11px'}}>
                {item}
              </Button>
            ))}
            
          </Box>
          <Box sx={{ justifyContent: 'space-between',}}>
            <IconButton>
            <NotificationsIcon sx={{color:'#737373', fontSize: 24,marginTop: '1px',}}/>

            </IconButton>
            <span className='mx-3'/>
            <IconButton>
            <Brightness4Icon sx={{color:'#737373',fontSize: 24,marginTop: '1px',}}/>

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
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
    </ThemeProvider>
  );
}
