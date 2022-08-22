import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Button, Card, CardActionArea, CardMedia } from '@mui/material';


export const Partner = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className=' py-10 pl-32 '>
                <div className='text-center text-black'>
                    <h1 className='text-3xl    text-start font-semibold	'>Our <span className='text-blue-700 '> Partners</span> </h1>
                    <p className='text-md my-3 text-start'>A very big thank you to all our partners for their continued partnership.
                        <span></span><br></br>
                        If you’re interested in being showcased throughout , contact info@gdgistanbul.com to discuss sponsorship opportunities.</p>
                    <div className='mt-3'>
                        <h2 className='text-start my-5 text-xl'>Template Creator</h2>
                        <Card sx={{ maxWidth: 200,maxHeight:400 }}>
                       
                            <CardMedia
                            component="img"
                            
                            image={require("../images/gdg.png")}
                            
                            />
                            </Card>
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
