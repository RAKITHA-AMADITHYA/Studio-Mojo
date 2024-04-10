import { Box, Button, Divider, Grid, Fade, IconButton, Typography, useMediaQuery } from '@mui/material'
import anime from '../assets/anime1.png'
import messegeIcon from '../assets/messege.png'
import missedCallIcon from '../assets/missedcall.png'
import robotIcon from '../assets/robot.png'
import noteIcon from '../assets/note.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from "framer-motion"
import Feature from '../assets/feature.gif'
import logo from '../assets/logo.png'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import { Link } from 'react-router-dom'
import Card from '../components/ContentCard/Card'

const Home = () => {


  const isXsSm = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme => theme.breakpoints.up('md'));
  const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
  return (
    <div  >
      {/* Section 1 */}
      <section>
        {/* Text Grid */}
        <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} mt={2} p={1}>
          <Fade in timeout={1000}>
            <Typography variant='h2' sx={{ fontSize: { xs: '30px', sm: '40px', md: '40px', lg: '50px', xl: '80px' }, }}>
              <span id='text' >
                Text Your Way to
              </span>{' '}
              <span id='text' style={{ color: '#0070C0', fontWeight: 800 }} >
                Success
              </span>
            </Typography>
          </Fade>
        </Grid>

        <Grid container mt={-2} spacing={2} p={1}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display={'flex'} justifyContent={'center'} >
            {/* <motion.div animate={{}}> */}

            <img src={anime} width={'75%'} alt="" />
            {/* </motion.div> */}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display={'flex'} justifyContent={'center'} alignItems={'start'} flexDirection={'column'} p={2} >
            <Fade in timeout={2000}>
              <Typography variant='h2' sx={{ fontSize: { xs: '25px', sm: '30px', md: '30px', lg: '45px', xl: '80px' }, }}>
                <span >
                  Instantly Notify All Your Customers with a
                </span>{" "}
                <span style={{ color: '#000000', fontWeight: 800 }}>
                  Single SMS Click!
                </span>
              </Typography></Fade>
            <Grid item mt={2}>
              <Fade in timeout={3000}>

                <Typography variant='subtitle1' sx={{ fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px', xl: '30px' } }} > <span style={{ color: '#000000', fontWeight: 800 }}>
                  Studio Mojo
                </span>
                  <span >
                    a user-friendly text messaging platform to extend your customer interactions. Send promotional offers, alerts, reminders and marketing campaigns via SMS and email, all within a matter of seconds!
                  </span>{" "}

                </Typography>
              </Fade>
            </Grid>

            <Link to="/signup">
              <Fade in timeout={4000}>
              <Button
  sx={{
    mt: 4, // Add margin-top
    fontSize: { xs: '1rem', xl: '1.5rem' }, // Set different font sizes for different screen sizes
    padding: { xs: '10px 20px', xl: '20px 40px' }, // Set different padding for different screen sizes
  }}
  variant="outlined"
  href="#outlined-buttons"
>
                  Get Started
                </Button>
              </Fade>
            </Link>
          </Grid>
        </Grid>
      </section>


      {/* Section 2 */}
      <section style={{ background: 'var(--P1, rgba(0, 112, 192, 0.06))' }}>
        <Grid item display={'flex'} justifyContent={'center'} mt={2} p={5} alignItems={'center'} textAlign={'center'}>
          <Typography variant='h2' sx={{ fontSize: { xs: '25px', sm: '30px', md: '33px', lg: '40px', xl: '50px' } }}>Discover All Your Marketing Needs In One Place</Typography>
        </Grid>
        <Grid container p={2} spacing={2} display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>

        <Card img={messegeIcon} title="SMS Campaigns to " title2="Contact Lists"
          description="You can send a simple SMS message to multiple contact groups at the same
        time in one single campaign."
        />

        <Card img={missedCallIcon}   title="Missed Call lead  " title2="generation"
          description="You can send a simple SMS message to multiple contact groups at the same
        time in one single campaign."
        />

<Card img={robotIcon} title="Bots with automated  "  title2=" interactivity"
          description="You can send a simple SMS message to multiple contact groups at the same
        time in one single campaign."
        />
        
        <Card img={noteIcon} title="Criteria system for "  title2=" campaigns"
          description="You can send a simple SMS message to multiple contact groups at the same
        time in one single campaign."
        />

</Grid>

        <Grid item p={2} display={'flex'} justifyContent={'center'} >
          <Link to="/features">
            <Button
              sx={{
                mt: 2, // Add margin-top
                fontSize: { xs: '1rem', xl: '1.5rem' },                padding: '10px 20px',
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


        
      </section>

      {/* Section 4 */}
      <section style={{ background: 'var(--P1, rgba(0, 112, 192, 0.06))' }}>
        <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} p={2}>
          <Typography variant='h4'  sx={{ fontSize: { xs: '25px', sm: '25px', md: '30px', lg: '30px', xl: '30px' } }} fontWeight={400}>Convenient and cost-effective plans are available for Anyone</Typography>
        </Grid>


        <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} mt={2} p={2}>
          <Typography variant='h3' sx={{ fontSize: { xs: '30px', sm: '35px', md: '35px', lg: '35px', xl: '35px' } }}>Have An Unlimited Amount Of Team Members, Contacts And Text Messages</Typography>
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

    </div>
  )
}

export default Home
