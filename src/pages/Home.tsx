import React from 'react'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <>
      <div >
      <Navbar/>
        <Box className="items-start justify-items-start  flex flex-row  " sx={{ }}>
          <img src={require("../images/hello.png")} alt='i' width="500px " height="500px" className='' />
          <h1 className='text-4xl	pt-40 mobil:text-7xl  '>Make good things <span className='text-blue-600	'>together</span>.</h1>
          </Box>
      </div>
    </>
  )
}
