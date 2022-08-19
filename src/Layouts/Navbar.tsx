import React, { useState } from 'react'
import { BillIcons } from '../images/Icons/icons';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
  }
  
  const drawerWidth = 240;
  const navItems = ['Home', 'About', 'Contact'];



export default function Navbar(props: Props) {
    const { window } = props;

    const [navbar, setNavbar] = useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);


    

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
      const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            HSD Club
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

   


    return (
        <nav className={navStyle}>

            <div className="">
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
               
            </div>

            <div className={div1Style}>
                <div className="flex">
                    <a className="text-xl" href="#pablo">
                        HSD Club
                    </a>
                </div >

            </div>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>

          <Box component="nav">
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

            <div className='flex'>
                <div className={'flex-1 justify-self-center  md:block md:pb-0 md:mt-0 lg:block lg:pb-0 lg:mt-0 '}>
                    <div className="" id="example-navbar-warning">
                        <ul className={ulStyle}>
                            <li className="nav-item ">
                                <a className={aStyle} href="#pablo">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={aStyle} href="#pablo">
                                    Events
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={aStyle} href="#pablo">
                                    Team
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={aStyle} href="#pablo">
                                    Speakers
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={aStyle} href="#pablo">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={aStyle} href="#pablo">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={aStyle} href="#pablo">
                                    Blogs
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='flex mr-5 mx-3 '>
                    <BillIcons />
                </div>
            </div>
        </nav>
    )
}

const navStyle = `
flex
p-0
m-0

shadow-md
shadow-gray-400
items-center
bg-white-500

font-sans
font-medium
tracking-widest
text-sm	
`;
const div1Style = `
container 
flex 
ml-4 
font-medium  
`
const ulStyle = `
flex 
flex-col 
lg:flex-row 
list-none 
text-xgray-dark 
text-md 
mx-1

`

const aStyle = `
focus:bg-xgray-light 
focus:rounded 
hover:bg-xgray-extralight 
hover:rounded 
transparent 
hover:bg-transparent 
duration-300 
px-4 
py-2 
mx-1    
flex items-center  
antialiased	 
font-normal 
leading-snug 
hover:opacity-75
md:hidden
`