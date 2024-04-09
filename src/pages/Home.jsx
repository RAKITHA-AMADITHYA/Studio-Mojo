import { Box, Button, Divider, Grid, Fade, IconButton, Typography, useMediaQuery } from '@mui/material'
import anime from '../assets/anime1.png'
import messegeIcon from '../assets/messege.png'
import missedCallIcon from '../assets/missedcall.png'
import robotIcon from '../assets/robot.png'
import noteIcon from '../assets/note.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import Feature from '../assets/feature.gif'
import logo from '../assets/logo.png'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import { Link } from 'react-router-dom'


const Home = () => {
  useGSAP(() => {
    gsap.to('#text', {
      ease: 'power1.inOut',
      opacity: 1,
      y: 0
    })

    gsap.fromTo('.para', {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      delay: 1,
      stagger: 0.1
    })
  }, [])

  const isXsSm = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme => theme.breakpoints.up('md'));
  const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
  return (
    <>
      {/* Section 1 */}
      <section>
        {/* Text Grid */}
        <Grid item display={'flex'} justifyContent={'center'} mt={2}>
          <Fade in timeout={1000}>
            <Typography variant='h2'>
              <span id='text' style={{ fontSize: { xs: '2px', sm: '20px', md: '30px', lg: '30px', xl: '30px' } }}>
                Text Your Way to
              </span>{' '}
              <span id='text' style={{ color: '#0070C0', fontSize: { xs: '20px', sm: '20px', md: '30px', lg: '30px', xl: '30px' } }}>
                Success
              </span>
            </Typography>
          </Fade>
        </Grid>

        <Grid container mt={-2} spacing={2} p={1}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <img src={anime} width={'75%'} alt="" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display={'flex'} justifyContent={'center'} alignItems={'start'} flexDirection={'column'} >
            <Fade in timeout={2000}>
              <Typography variant='h2' fontWeight={400}>
                <span style={{ fontSize: { xs: '20px', sm: '20px', md: '30px', lg: '30px', xl: '30px' } }}>
                  Instantly Notify All Your Customers with a
                </span>{" "}
                <span style={{ color: '#000000', fontWeight: 800 }}>
                  Single SMS Click!
                </span>
              </Typography></Fade>

            <Typography variant='p' > <span style={{ color: '#000000', fontWeight: 800 }}>
              Studio Mojo
            </span>
              <span style={{ fontSize: { xs: '20px', sm: '20px', md: '30px', lg: '30px', xl: '30px' } }}>
                a user-friendly text messaging platform to extend your customer interactions. Send promotional offers, alerts, reminders and marketing campaigns via SMS and email, all within a matter of seconds!
              </span>{" "}

            </Typography>

            <Link to="/signup">
              <Button
                sx={{
                  mt: 2, // Add margin-top
                  fontSize: '1rem', // Increase font size
                  padding: '10px 20px', // Increase padding
                }}
                variant="outlined"
                href="#outlined-buttons"
              >
                Get Started
              </Button>
            </Link>
          </Grid>
        </Grid>
      </section>


      {/* Section 2 */}
      <section style={{ background: 'var(--P1, rgba(0, 112, 192, 0.06))' }}>
        <Grid item display={'flex'} justifyContent={'center'} mt={2} p={5}>
          <Typography variant='h2'>Discover All Your Marketing Needs In One Place</Typography>
        </Grid>

        <Grid container p={2}>
          {/*Messege Grid  */} <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
            xl={3}
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img src={messegeIcon} width={'20%'} alt="" />
            <Typography variant="h5">SMS Campaigns to Contact Lists</Typography>
            <Grid item p={2}>
              <Typography variant="p">You can send a simple SMS message to multiple contact groups at the same
                time in one single campaign.</Typography></Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
            xl={3}
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            p
          >
            <img src={missedCallIcon} width={'20%'} alt="" />
            <Typography variant="h5">Missed Call lead generation</Typography>
            <Grid item p={2}>
              <Typography variant="p">You can send a simple SMS message to multiple contact groups at the same
                time in one single campaign.</Typography>
            </Grid>


          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
            xl={3}
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img src={robotIcon} width={'20%'} alt="" />
            <Typography variant="h5">Bots with automated
              interactivity</Typography>
            <Grid item p={2}>
              <Typography variant="p">You can send a simple SMS message to multiple contact groups at the same
                time in one single campaign.</Typography></Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
            xl={3}
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img src={noteIcon} width={'20%'} alt="" />
            <Typography variant="h5">Criteria system for campaigns</Typography>
            <Grid item p={2}>
              <Typography variant="p">You can send a simple SMS message to multiple contact groups at the same
                time in one single campaign.</Typography></Grid>
          </Grid>

        </Grid>
        <Grid item p={2} display={'flex'} justifyContent={'center'} >
          <Link to="/features">
            <Button
              sx={{
                mt: 2, // Add margin-top
                fontSize: '1rem', // Increase font size
                padding: '10px 20px',
                '&:hover': {
                  backgroundColor: '#0070C0', // Change background color on hover
                }, // Increase padding
              }}
              variant="contained"
              href="#outlined-buttons"

            >
              Explore More
            </Button>
          </Link>
        </Grid>
      </section>


      {/* Section 3 */}
      <section>
        <Grid item display={'flex'} justifyContent={'center'} mt={2} p={2}>
          <Typography variant='h2'>How you can use our tool ?</Typography>
        </Grid>

        <Grid
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={2}
          p={2}
          flexDirection="column"
        >
          <img
            src={Feature}
            width={isXsSm ? '100%' : isMd ? '50%' : isLg ? '40%' : '30%'}
            alt=""
          />
        </Grid>


        <Grid container>

        </Grid>
      </section>

      {/* Section 4 */}
      <section style={{ background: 'var(--P1, rgba(0, 112, 192, 0.06))' }}>
        <Grid item display={'flex'} justifyContent={'center'} mt={10} p={2}>
          <Typography variant='h4' fontWeight={400}>Convenient and cost-effective plans are available for Anyone</Typography>
        </Grid>


        <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} mt={2} p={2}>
          <Typography variant='h3' sx={{ fontSize: { xs: '20px', sm: '20px', md: '30px', lg: '30px', xl: '30px' } }}>Have An Unlimited Amount Of Team Members, Contacts And Text Messages</Typography>
        </Grid>

        <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} mt={20} p={2}>
          <Typography variant='h3' color={'#0070C0'}>No Setup Fees</Typography>
        </Grid>
      </section>

      {/* footer */}
      <section style={{ background: '#0070C0' }}>
        <Grid container p={2}>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
            <img src={logo} width={'30%'} alt="" />
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} display={'flex'} justifyContent={'end'} alignItems={'end'} flexDirection={'column'}>
            <Typography variant='p' color={'white'} fontWeight={400}>Contact</Typography>
            <Typography variant='p' color={'white'} fontWeight={600}>(+94) 70 000 0000</Typography>


            <Typography variant='subtitle1' color={'white'} fontWeight={400} >Email</Typography>
            <Typography variant='subtitle1' color={'white'} fontWeight={600}>support@studiomojo.lk</Typography>
          </Grid>

        </Grid>
        <Divider sx={{ my: 2 }} />
        <Grid item display={'flex'} justifyContent={'start'} alignItems={'start'} spacing={2} p={1}>
          <Typography variant='p' color={'white'} fontWeight={400}>© 2023 StudioMojo</Typography>

        </Grid>

        <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={2}>
          <Typography variant='p' color={'white'} fontWeight={500}>Terms & Conditions</Typography>
          <Box mx={2} />
          <Typography variant='p' color={'white'} fontWeight={500}>Privacy Policy</Typography>
        </Grid>

        <Grid container justify="space-between" alignItems="end" justifyContent={'end'} spacing={5}>
  <Grid item>
    <FacebookIcon style={{ color: 'white' }} />
  </Grid>
  <Grid item>
    <YouTubeIcon style={{ color: 'white' }} />
  </Grid>
  <Grid item>
    <InstagramIcon style={{ color: 'white' }} />
  </Grid>
</Grid>



      </section>

    </>
  )
}

export default Home
