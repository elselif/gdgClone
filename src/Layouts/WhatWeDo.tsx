import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';



export default function FullWidthGrid() {
    return (
        <Box sx={{ flexGrow: 1, marginTop: 5, marginBottom: 5 }} className=" p-5 bg-xgray-normal mobil:px-5 xl:mx-32">
            <Grid container spacing={1} >
                <Grid xs={12} md={4} sx={{ backgroundColor: '#f5f5f5' }}>
                    <Typography variant='h5' align='left' >What we do ?</Typography>
                    <Typography variant='body1' align='left' sx={{ marginBottom: 3 }}>Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology.</Typography>
                    <Typography variant='body1' align='left' sx={{ marginBottom: 1 }}>About different Google technologies</Typography>
                </Grid>
                <Grid xs={6} md={2} >
                    <Item sx={{ backgroundColor: '#f5f5f5', boxShadow: 0 }}>
                        <Grid >
                            <ChatBubbleIcon fontSize='large' />
                            <Typography color="black" variant='h6' sx={{ marginBottom: 2, marginTop: 1 }}>Talks</Typography>
                            <Typography color="black" variant='body2'>Get updated with the latest news and announcements</Typography>

                        </Grid>
                    </Item>
                </Grid>
                <Grid xs={6} md={2}>
                    <Item sx={{ backgroundColor: '#f5f5f5', boxShadow: 0 }}>
                        <Grid>
                            <CodeIcon fontSize='large' />
                            <Typography color="black" variant='h6' sx={{ marginBottom: 2, marginTop: 1 }}>Codelabs</Typography>
                            <Typography color="black" variant='body2'>Get hands-on experience and guidance from the community members</Typography>

                        </Grid>
                    </Item >
                </Grid>
                <Grid xs={6} md={2}>
                    <Item sx={{ backgroundColor: '#f5f5f5', boxShadow: 0 }}>
                        <Grid>
                            <SchoolIcon fontSize='large' />
                            <Typography color="black" variant='h6' sx={{ marginBottom: 2, marginTop: 1 }}>Campus Roadshows</Typography>
                            <Typography color="black" variant='body2'>Share knowledge in different Companies, colleges and universities</Typography>
                        </Grid>
                    </Item>
                </Grid>
                <Grid xs={6} md={2}>
                    <Item sx={{ backgroundColor: '#f5f5f5', boxShadow: 0 }}>
                        <Grid>
                            <BubbleChartIcon fontSize='large' />
                            <Typography color="black" variant='h6' sx={{ marginBottom: 2, marginTop: 1 }}>Live Viewing Parties</Typography>
                            <Typography color="black" variant='body2'>Share knowledge in different Companies, colleges and universities</Typography>
                        </Grid>
                    </Item>
                </Grid>



            </Grid>
        </Box>
    );
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));