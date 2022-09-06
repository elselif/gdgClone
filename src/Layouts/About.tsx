import Button from '@mui/material/Button'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';


export const About = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className='bg-xpu-medium py-10 px-5 '>
                <div className='text-left text-white'>
                    <h1 className='text-2xl'>About GDG Istanbul</h1>
                    <p className='text-md my-3'>GDG Istanbul, Google teknolojilerine ilgi duyan, bir şeyler geliştirmek ve bilgi paylaşımında bulunmak isteyen insanlardan oluşan bir topluluktur. Toplantılarımıza katılıp hem kendi deneyimlerinizi bizimle paylaşabilir hem de başkalarının deneyimlerinden faydalanabilirsiniz. Etkinliklerimizin popüler konulari genelde Android ve GWT olsada bizimle paylaşmak istediğiniz her konuya açığız.</p>
                    <Button color='secondary' variant="outlined">Meetup Page</Button><br></br>
                    <div className='mt-3'>
                        <a href="#">
                        </a>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
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
