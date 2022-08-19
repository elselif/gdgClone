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
import { shadows } from '@mui/system';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { ThemeProvider } from '@material-ui/core/styles';

import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 895,
        lg: 1200,
        xl: 1536,
      },
    },
  });
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
    breakpoint: string;
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'Events', 'Team','Speakers','About','Contact','Blogs'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 1 }}>
        HSD CLUB
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

  const breakpoints = ['xs', 'tiny', 'sm', 'md', 'lg', 'xl'];


  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' , justifyContent: 'space-between'}}>
      <AppBar component="nav" >
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
          <Box  sx={{ display:{sm:'flex'},marginRight:'auto'}}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 3, }}
          >
            HSD CLUB
          </Typography>
          </Box>
          <Box className='hidden md:block' sx={{ marginLeft:'auto'}}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' ,marginX:'9px'}}>
                {item}
              </Button>
            ))}
            
          </Box>
          <Box sx={{ justifyContent: 'space-between'}}>
            <NotificationsIcon sx={{fontSize: 22,marginTop: '5px',marginLeft:'11px'}}/>
            <Brightness4Icon sx={{fontSize: 22,marginTop: '5px',marginLeft:'27px'}}/>
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       
      </Box>
    </Box>
    </ThemeProvider>
  );
}
