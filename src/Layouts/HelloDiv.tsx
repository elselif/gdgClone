import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';



export const HelloDiv = () => {
    return (
        <>
            <div className='items-center lg:mx-32 '>
                <Grid alignItems="center" direction="row" justifyContent="flex-start" container >
                    <Grid item >
                        <ButtonBase className="">
                            <img src={require("../images/hello.png")} alt='i' className='lg:w-[350px] sm:w-[500px]  whitespace-nowrap ' />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container    >
                        <Grid item xs container  >
                            <Grid className='sm:items-center ' item xs container direction="column" justifyContent="flex-start" alignItems="flex-start" >
                                <Typography className='text-gray-700 font-extrabold' variant="h4" component="div" sx={{}}>
                                    Make good things <span className='text-blue-800'>together</span>.
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    GDG Istanbul
                                </Typography>
                                <Typography variant="body2" className='text-left' color="text.secondary" gutterBottom>
                                    GDG Istanbul, Google teknolojilerine ilgi duyan, bir şeyler geliştirmek ve bilgi paylaşımında bulunmak isteyen insanlardan oluşan bir topluluktur.
                                </Typography>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2" className='mx-5'>
                                    <HashButton>
                                        #HSD
                                    </HashButton>
                                    <HashButton>
                                        #HSD Istanbul
                                    </HashButton>
                                    <HashButton>
                                        #HSD Istanbul
                                    </HashButton>
                                </Typography>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    <HomeButton variant="contained">Become a member</HomeButton>
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

const HomeButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    marginTop: 10,
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#2193F3',
    borderColor: '#2193F3',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#59abf0',
        borderColor: '#59abf0',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});
const HashButton = styled(Button)({
    color: 'black',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 13,
    fontWeight: '400',
    padding: '1px 1px',
    marginTop: 10,
    marginBottom: 20,
    marginRight: 10,
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#e0e0e0',
    borderColor: '#e0e0e0',
    borderRadius: 100,
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#b5b5b5',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#b5b5b5',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});