import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';


export const Partner = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className=' py-10 px-10 '>
                <div className='text-center text-black'>
                    <h1 className='text-3xl   font-[500]'>Our <span className='text-blue-700'> Events</span> & <span className='text-blue-700'>Meetups</span></h1>
                    <p className='text-md my-3'>At sessions that span from the technical to the visionary, let’s celebrate and discover what the technologies can enable: how product innovation, open source, and ML and AI can propel enterprises forward and solve the big problems that impact all of us.</p>
                    <div className='mt-3'>
                        <a href="#">See More</a>
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
