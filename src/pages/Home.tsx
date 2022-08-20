import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Navbar from '../components/Navbar';
import { start } from 'repl';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <>
      <Navbar />
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 1200,
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 290, height: 280 }}>
              <img src={require("../images/hello.png")} alt='i' className='w-auto h-auto' />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <div className='flex float-left'>
                  Selam
                </div>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  Remove
                </Typography>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
