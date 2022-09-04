import { IconButton } from '@mui/material';
import React from 'react'

//Context
import { useContext } from 'react';
import SiteContext from './SiteContext';

//Icons
import NotificationsIcon from '@mui/icons-material/Notifications';
import Brightness4Icon from '@mui/icons-material/Notifications';



export const SwitchTheme = () => {
  useContext(SiteContext)
  const { theme, setTheme } = useContext(SiteContext)
  return (
    <>
-      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <IconButton>
          <Brightness4Icon sx={{ color: '#737373', fontSize: 24, marginTop: '1px', }} />
          Mevcut theme = {theme}
        </IconButton>
      </button>
    </>
  )
}
