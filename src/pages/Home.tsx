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
    <Navbar/>
    
    
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className='w-auto h-auto lg:w-[500px] '>
          <img src={require("../images/hello.png")} alt='i'className='w-auto h-auto' />
          </ButtonBase>
        </Grid>
        <Grid   item xs={12} sm container>
          <Grid  item xs container spacing={2}>
            <Grid className=' ' item xs >
              <Typography className=''  variant="h3" component="div" sx={{}}>
                Make good things <span className='text-blue-800'>together</span>.
              </Typography>
              <Typography variant="body2" gutterBottom>
                GDG Istanbul
              </Typography>
              <Typography variant="body2" color="text.secondary">
              GDG Istanbul, Google teknolojilerine ilgi duyan, bir şeyler geliştirmek ve bilgi paylaşımında bulunmak isteyen insanlardan oluşan bir topluluktur.
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
         
        </Grid>
      </Grid>
    </>
  );
}
