import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
// import Box from '@mui/material/Box';
import { EventCard } from './EventCard';


export const EventsPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className='mobil:pl-5 bg-xgray-normal py-10 pl-32  '>
                <div className='text-left text-black'>
                    <h1 className='text-3xl font-semibold' >Our <span className='text-blue-700'> Feature Event </span> & <span className='text-blue-700'> Meetup</span></h1>
                    <p className='text-md my-3'>Events are listed in reverse chronological order by date.</p>
                    <EventCard />
                </div>
            </div>
        </ThemeProvider>
    )
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#0a67f2',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#f5f5f5',
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

// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//         •
//     </Box>
// );