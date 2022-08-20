import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Navbar from '../components/Navbar';
import { start } from 'repl';



export default function ComplexGrid() {
  return (
    <>
      <Navbar />

      <div className='mt-10 mx-32 mb-10'>

      <Grid alignItems="center"  direction="row"  justifyContent="flex-start" container >
        <Grid item >
          <ButtonBase className="">
            <img src={require("../images/hello.png")} alt='i' className='lg:w-[350px] sm:w-[500px] whitespace-nowrap' />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container    >
          <Grid item xs container  >
            <Grid className=' ' item xs container direction="column"   justifyContent="flex-start"   alignItems="flex-start" >
              <Typography className='' variant="h3" component="div" sx={{}}>
                Make good things <span className='text-blue-800'>together</span>.
              </Typography>
              <Typography variant="body2" gutterBottom>
                GDG Istanbul
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                GDG Istanbul, Google teknolojilerine ilgi duyan, bir şeyler geliştirmek ve bilgi paylaşımında bulunmak isteyen insanlardan oluşan bir topluluktur.
              </Typography>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
      </div>


    </>
  );
}
