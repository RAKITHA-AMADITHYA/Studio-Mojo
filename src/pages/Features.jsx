import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.png'
import feature3 from '../assets/feature3.png'
import feature4 from '../assets/feature4.png'




const Features = () => {
  return (
    <>
      {/* Section 1 */}
      <Grid item display={'flex'} justifyContent={'center'} flexDirection={'column'} textAlign={'center'} mt={2} p={5}>
        <Typography variant='h2'>Elevate Your Experience</Typography>
        <Typography variant='h6'>Discover Our Remarkable Features!</Typography>
      </Grid>

      {/* card 1 */}

      <Grid item p={5} mt={2}>
        <Box sx={{ borderRadius: 2, background: 'var(--P1, rgba(0, 112, 192, 0.06))' }}>
          <Grid container p={4}>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} display={'flex'} justifyContent={'center'}>
              <img src={feature1} width={'45%'} alt="" />
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <Typography variant='h3'>Elevate Your Experience</Typography>
              <Typography variant='h6'>With our messaging platform, you have the capability to efficiently send a single SMS message to multiple contact groups simultaneously, all within a single campaign. This means that whether
                you're running a marketing promotion, sending out important notifications, or coordinating with various teams, you can reach your target audience more effectively and save valuable time.</Typography></Grid>
          </Grid>
        </Box>
      </Grid>

      {/* card 2 */}

      <Grid item p={5} mt={2}>
        <Box sx={{ borderRadius: 2, background: 'var(--P1, rgba(0, 112, 192, 0.06))' }}>
          <Grid container p={4}>       
               <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
            <Typography variant='h3'>Missed call lead generation</Typography>
            <Typography variant='h6'>With our messaging platform, you have the capability to efficiently send a single SMS message to multiple contact groups simultaneously, all within a single campaign. This means that whether you're running a marketing promotion, sending out important notifications, or coordinating with various teams, you can reach your target audience more effectively and save valuable time.</Typography></Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} display={'flex'} justifyContent={'center'}>
              <img src={feature2} width={'70%'} alt="" />
            </Grid>

          </Grid>
        </Box>
      </Grid>

         {/* card 3 */}

         <Grid item p={5} mt={2} spacing={2}>
        <Box sx={{ borderRadius: 2, background: 'var(--P1, rgba(0, 112, 192, 0.06))' }}>
          <Grid container p={4}>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} display={'flex'} justifyContent={'center'}>
              <img src={feature3} width={'50%'} alt="" />
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <Typography variant='h3'>Bots with automated interactivity</Typography>
              <Typography variant='h6'>With our messaging platform, you have the capability to efficiently send a single SMS message to multiple contact groups simultaneously, all within a single campaign. This means that whether you're running a marketing promotion,
               sending out important notifications, or coordinating with various teams, you can reach your target audience more effectively and save valuable time.</Typography></Grid>
          </Grid>
        </Box>
      </Grid>

      {/* card 4 */}

      <Grid item p={5} mt={2}>
        <Box sx={{ borderRadius: 2, background: 'var(--P1, rgba(0, 112, 192, 0.06))' }}>
          <Grid container p={4} spacing={2}>       
               <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
            <Typography variant='h3'>Target Audience</Typography>
            <Typography variant='h6'>With our messaging platform, you have the capability to efficiently send a single SMS message to multiple contact groups simultaneously, all within a single campaign. This means that whether you're running a marketing promotion, sending out important notifications, or coordinating with various teams, you can reach your 
            target audience more effectively and save valuable time.</Typography></Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} display={'flex'} justifyContent={'center'}>
              <img src={feature4} width={'70%'} alt="" />
            </Grid>

          </Grid>
        </Box>
      </Grid>
    </>
  )
}

export default Features
