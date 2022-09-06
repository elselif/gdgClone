import { IconButton } from '@mui/material';

//Context
import { useSite } from './SiteContext';

//Icons
import Brightness4Icon from '@mui/icons-material/Notifications';



export const SwitchLang = () => {
  const { lang, setLang } = useSite() 
  return (
    <>
      <button onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}>
        <IconButton>
          <Brightness4Icon sx={{ color: '#737373', fontSize: 24, marginTop: '1px', }} />
          Mevcut dil = {lang}
        </IconButton>
      </button>
    </>
  )
}
