import React from 'react'
import Button from '@mui/material/Button'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const EventCard = () => {
    return (
        <>
            <Card sx={{ minWidth: 200, maxWidth: 300, boxShadow: 7 }} >
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Apr 26, 2020
                    </Typography>
                </CardContent>
                <Typography variant="h6" component="div" className='px-4'>
                    IWD Istanbul 2020 - Online
                </Typography>
                <CardActions>
                    <Button color='primary' size="small" className='text-blue'>See More</Button>
                </CardActions>
            </Card>
        </>
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

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);