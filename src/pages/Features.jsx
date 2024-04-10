import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.png'
import feature3 from '../assets/robot2.png'
import feature4 from '../assets/feature4.png'




const Features = () => {
  return (
    <>
      {/* Section 1 */}
      <Grid item display={'flex'} justifyContent={'center'} flexDirection={'column'} textAlign={'center'} mt={2} p={5}>
        <Typography variant='h2' sx={{ fontSize: { xs: '30px', sm: '40px', md: '40px', lg: '50px', xl: '80px' }, }}>Elevate Your Experience</Typography>
        <Typography variant='h6' sx={{ fontSize: { xs: '20px', sm: '20px', md: '20px', lg: '20px', xl: '30px' } }} >Discover Our Remarkable Features!</Typography>
      </Grid>
      
      <Grid container p={2} spacing={10}   pl={{ xs: 2, sm: 2, md:10,lg:8,xl:20 }} 
  pr={{ xs: 2, sm: 2,md:10,lg:8,xl:20 }}>
      {/* card 1 */}
      <Grid item >
        <Box sx={{ borderRadius: 2, background: '#CEE5F3' }}>
          <Grid container p={4}>
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5} display={'flex'} justifyContent={'center'}>
            <img src={feature1} style={{ width: '45%', maxWidth: '100%' }} alt="" />
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <Typography variant='h4'  sx={{ fontSize: { xs: '18px', sm: '20px', md: '35px', lg: '35px', xl: '40px' }, }}>One campaign, multiple segments</Typography>
              <Typography variant='subtitle1' sx={{ mt: 2, fontSize: { xs: '15px', sm: '12px', md: '15px', lg: '15px', xl: '25px' }, }}>With our messaging platform, you have the capability to efficiently send a single SMS message to multiple contact groups simultaneously, all within a single campaign. This means that whether
                you're running a marketing promotion, sending out important notifications, or coordinating with various teams, you can reach your target audience more effectively and save valuable time.</Typography></Grid>
          </Grid>
        </Box>
      </Grid>

      {/* card 2 */}
      <Grid item  >
        <Box sx={{ borderRadius: 2, background: '#E5E5E5' }}>
          <Grid container p={4} spacing={2}>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} 
              display={{ xs: 'flex', sm: 'none', md: 'none' }}
              justifyContent={'center'}
              alignItems={'center'}
              textAlign={'center'}
              >
                <img src={feature2} style={{ width: '45%', maxWidth: '100%' }} alt="" />
            </Grid>

            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <Typography variant='h4' sx={{ fontSize: { xs: '18px', sm: '20px', md: '35px', lg: '35px', xl: '40px' }, }}>Missed call lead generation</Typography>
              <Typography variant='subtitle1' sx={{ mt: 2, fontSize: { xs: '12px', sm: '12px', md: '15px', lg: '15px', xl: '30px' }, }}>With our messaging platform, you have the capability to efficiently send a single SMS message to multiple contact groups simultaneously, all within a single campaign. This means that whether
                you're running a marketing promotion, sending out important notifications, or coordinating with various teams, you can reach your target audience more effectively and save valuable time.</Typography></Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}
              display={{ xs: 'none', sm: 'flex', md: 'flex' }}
              justifyContent={'center'}
              alignItems={'center'}
              textAlign={'center'}
              >
                
                <img src={feature2} style={{ width: '45%', maxWidth: '100%' }} alt="" />
            </Grid>

          </Grid>



        </Box>
      </Grid>


      {/* card 3 */}
      <Grid item  >
        <Box sx={{ borderRadius: 2, background: '#CEE5F3' }}>
          <Grid container p={4}>
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5} display={'flex'} justifyContent={'center'}>
            <img src={feature3} style={{ width: '45%', maxWidth: '100%' }} alt="" />
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <Typography variant='h4' sx={{ fontSize: { xs: '18px', sm: '20px', md: '35px', lg: '35px', xl: '40px' }, }}>Bots with automated interactivity</Typography>
              <Typography variant='body1' sx={{ mt: 2, fontSize: { xs: '12px', sm: '12px', md: '15px', lg: '15px', xl: '30px' }, }}>With our messaging platform, you have the capability to efficiently send a single SMS message to multiple contact groups simultaneously, all within a single campaign. This means that whether
                you're running a marketing promotion, sending out important notifications, or coordinating with various teams, you can reach your target audience more effectively and save valuable time.</Typography></Grid>
          </Grid>
        </Box>
      </Grid>

      {/* card 4 */}
      <Grid item  >
        <Box sx={{ borderRadius: 2, background: '#E5E5E5' }}>
          <Grid container p={4} spacing={2}>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} 
              display={{ xs: 'flex', sm: 'none', md: 'none' }}
              justifyContent={'center'}
              alignItems={'center'}
              textAlign={'center'}
              >
              <img src={feature4} style={{ width: '45%', maxWidth: '100%' }} alt="" />
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <Typography variant='h4' sx={{ fontSize: { xs: '18px', sm: '20px', md: '35px', lg: '35px', xl: '40px' }, }}>Target Audience</Typography>
              <Typography variant='subtitle1' sx={{ mt: 2, fontSize: { xs: '12px', sm: '12px', md: '15px', lg: '15px', xl: '30px' }, }}>With our messaging platform, you have the capability to efficiently send a single SMS message to multiple contact groups simultaneously, all within a single campaign. This means that whether
                you're running a marketing promotion, sending out important notifications, or coordinating with various teams, you can reach your target audience more effectively and save valuable time.</Typography></Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}
              display={{ xs: 'none', sm: 'flex', md: 'flex' }}
              justifyContent={'center'}
              alignItems={'center'}
              textAlign={'center'}
              >
                
              <img src={feature4} style={{ width: '45%', maxWidth: '100%' }} alt="" />
            </Grid>

          </Grid>



        </Box>
      </Grid>
</Grid>

    </>
  )
}

export default Features
