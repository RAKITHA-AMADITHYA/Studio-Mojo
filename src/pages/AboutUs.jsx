import React from 'react'
import { Box, Grid } from '@mui/material'


const AboutUs = () => {
  return (
    <div style={{display:'flex', justifyContent:'center' , alignItems:'center'}}>
      <Grid >
        <Box mt={15} sx={{borderRadius:4, bgcolor:'white'}}> <h1>I m About Us</h1></Box>
        </Grid>
    </div>
  )
}

export default AboutUs
