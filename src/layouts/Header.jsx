import React, { useState } from 'react';
import { Box, Grid, Badge, Stack, Button, Typography, Modal, Backdrop, Fade, TextField, IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/logo.png';
import loginimg from '../assets/Group 112.png'
import CloseIcon from '@mui/icons-material/Close';


function Header() {
  const [open, setOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);


  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSignupToggle = () => {
    setSignupOpen(!signupOpen);
  };

  const handleOtpToggle = () => {
    setOtpOpen(!otpOpen);
    setSignupOpen(false);

  };

  const handleLinkClick = () => {
    setOpen(false); // Close the sidebar when a link is clicked
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
      }}
    >
      <Grid container p={1}>
        {/* Logo */}
        <Grid item xs={11} sm={11} md={2} lg={2} xl={2} display={'flex'} justifyContent={'start'} alignItems={'center'}>
          <Link to="/">
            <img src={Logo} width={'200px'} alt="" />
          </Link>
        </Grid>
        <Grid item xs={1} sm={1} md={1} display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }} justifyContent={'center'} alignItems={'center'}>
          <Badge color="primary">
            <MenuIcon color="action" onClick={handleToggle} />
          </Badge>
        </Grid>

        {/* Nav Links */}
        <Grid item md={8} lg={8} xl={8} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent={'center'} p={2}>
          
          <Grid container display={'flex'} >
            <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} mt={1} xs={3}  sm={3}  md={3}  lg={3} xl={3}>

              <Typography
                variant='h6'
                fontWeight={600}
                color={'#000000'}
                component={Link}
                to="/features"
                sx={{
                  '&:hover': {
                    color: '#0070C0',
                    cursor: 'pointer',
                    textDecoration: 'none', // Remove text decoration
                  },
                  textDecoration: 'none', // Remove text decoration
                  display: 'block',
                  width: '100%',
                }}
                onClick={handleLinkClick}
              >
                Features
              </Typography>
            </Grid>

            <Grid item display={'flex'} textAlign={'center'} justifyContent={'center'} alignItems={'center'} mt={1} xs={3}  sm={3}  md={3}  lg={3} xl={3}>
              <Typography
                variant='h6'
                fontWeight={600}
                color={'#000000'}
                component={Link}
                to="/pricing"
                sx={{
                  '&:hover': {
                    color: '#0070C0',
                    cursor: 'pointer',
                    textDecoration: 'none', // Remove text decoration
                  },
                  textDecoration: 'none', // Remove text decoration
                  display: 'block',
                  width: '100%',
                }}
                onClick={handleLinkClick}
              >
                Pricing
              </Typography>
            </Grid>

            <Grid item display={'flex'} textAlign={'center'} justifyContent={'center'} alignItems={'center'} mt={1} xs={3}  sm={3}  md={3}  lg={3} xl={3}>
              <Typography
                variant='h6'
                fontWeight={600}
                color={'#000000'}
                component={Link}
                to="/resources"
                sx={{
                  '&:hover': {
                    color: '#0070C0',
                    cursor: 'pointer',
                    textDecoration: 'none', // Remove text decoration
                  },
                  textDecoration: 'none', // Remove text decoration
                  display: 'block',
                  width: '100%',
                }}
                onClick={handleLinkClick}
              >
                Resources
              </Typography>
            </Grid>

            <Grid item display={'flex'} textAlign={'center'} justifyContent={'center'} alignItems={'center'} mt={1} xs={3}  sm={3}  md={3}  lg={3} xl={3}>
              <Typography
                variant='h6'
                fontWeight={600}
                color={'#000000'}
                component={Link}
                to="/about"
                sx={{
                  '&:hover': {
                    color: '#0070C0',
                    cursor: 'pointer',
                    textDecoration: 'none', // Remove text decoration
                  },
                  textDecoration: 'none', // Remove text decoration
                  display: 'block',
                  width: '100%',
                }}
                onClick={handleLinkClick}
              >
                About Us
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Login Signup */}
        <Grid item display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} md={2} lg={2} xl={2} justifyContent={'center'} p={1}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button  onClick={handleSignupToggle}>Signup</Button>
          </Stack>
        </Grid>
      </Grid>

      {/* Signup Modal */}
      <Modal
        open={signupOpen}
        onClose={handleSignupToggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={signupOpen}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              minWidth: { xs: '300px', sm: '400px', md: '700px', lg: '850px', xl: '1000px' },

              borderRadius: 2,



            }}
          >
            {/* <Button onClick={handleSignupToggle}>Close</Button> */}
            <IconButton onClick={handleSignupToggle} color="primary" aria-label="add to shopping cart">
              <CloseIcon />
            </IconButton>
            <Grid container spacing={1}>
              {/* modal image */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent={'center'} alignItems={'center'}>
                <img src={loginimg} alt="" />
              </Grid>

              {/* Modal content */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display={'flex'} justifyContent={'center'} alignContent={'center'}>
                <Box sx={{ backgroundColor: '#cfd8dc', borderRadius: 2, padding: 2, }} >
                  <Grid item display={'flex'} justifyContent={'center'} flexDirection={'column'} >

                    <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} mt={5} >
                      <img src={Logo} width={'70%'} alt="" />
                    </Grid>

                    <TextField sx={{ mt: 5 }} id="outlined-basic" label="Enter Mobile Number" variant="outlined" />
                    <Grid item display={'flex'} justifyContent={'start'} alignItems={'start'} mt={2} >

                      <Typography variant='subtitle1' sx={{ fontSize: { xs: '15px', sm: '15px', md: '15px', lg: '14px', xl: '25px' } }} fontWeight={600}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae</Typography>
                    </Grid>


                    <Grid item display={'flex'} justifyContent={'start'} alignItems={'start'} mt={2} >

                      <Typography variant='subtitle2' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '23px' } }} fontWeight={300}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae.</Typography>
                    </Grid>


                    <Button variant="contained" sx={{
                      mt: 4, '&:hover': { backgroundColor: 'primary.main' },
                      fontSize: { xs: '17px', sm: '17px', md: '17px', lg: '14px', xl: '23px' }
                    }} onClick={handleOtpToggle}>NEXT</Button>


                  </Grid>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Fade>
      </Modal>


       {/* OTP Modal */}
       <Modal
        open={otpOpen}
        onClose={handleOtpToggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={otpOpen}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              minWidth: { xs: '300px', sm: '400px', md: '700px', lg: '850px', xl: '1000px' },

              borderRadius: 2,



            }}
          >
            {/* <Button onClick={handleSignupToggle}>Close</Button> */}
            <IconButton onClick={handleOtpToggle} color="primary" aria-label="add to shopping cart">
              <CloseIcon />
            </IconButton>
            <Grid container spacing={1}>
              {/* modal image */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent={'center'} alignItems={'center'}>
                <img src={loginimg} alt="" />
              </Grid>

              {/* Modal content */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display={'flex'} justifyContent={'center'} alignContent={'center'}>
                <Box sx={{ backgroundColor: '#cfd8dc', borderRadius: 2, padding: 2, }} >
                  <Grid item display={'flex'} justifyContent={'center'} flexDirection={'column'} >

                    <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} mt={5} >
                      <img src={Logo} width={'70%'} alt="" />
                    </Grid>


                    <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} mt={2} >

<Typography variant='subtitle1' sx={{ fontSize: { xs: '22px', sm: '22px', md: '22px', lg: '22px', xl: '25px' } }} fontWeight={600}>
  OTP Confirmation</Typography>
</Grid>


<Grid container p={5} spacing={1}  display={'flex'} justifyContent={'center'}>
              <Grid item lg={3}>
                <TextField id="outlined-basic" variant="outlined" fullWidth InputProps={{
                            sx: {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#9e9e9e',
                                },
                            },
                        }} />

              </Grid>
              <Grid item lg={3}>
                <TextField id="outlined-basic" variant="outlined"fullWidth InputProps={{
                            sx: {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#9e9e9e',
                                },
                            },
                        }} />

              </Grid>
              <Grid item lg={3}>
                <TextField id="outlined-basic" variant="outlined" fullWidth InputProps={{
                            sx: {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#9e9e9e',
                                },
                            },
                        }} />

              </Grid>
              <Grid item lg={3}>
                <TextField id="outlined-basic" variant="outlined"  fullWidth InputProps={{
                            sx: {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#9e9e9e',
                                },
                            },
                        }}/>

              </Grid>
            </Grid>
            <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} mt={2} >

<Typography variant='subtitle1' sx={{ fontSize: { xs: '14', sm: '14', md: '14', lg: '14', xl: '16' } }} color={'#b0bec5'} fontWeight={600}>
  Resend OTP <span style={{ color: '#546e7a' }}>2.00</span>
</Typography>
</Grid>



                  


                    <Button variant="contained" sx={{
                      mt: 4, '&:hover': { backgroundColor: 'primary.main' },
                      fontSize: { xs: '17px', sm: '17px', md: '17px', lg: '14px', xl: '23px' }
                    }} onClick={handleOtpToggle}>Submit</Button>


                  </Grid>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Fade>
      </Modal>

{/* OTP Modal */ }
 {/* <Modal
open={otpOpen}
onClose={handleOtpToggle}
closeAfterTransition
BackdropComponent={Backdrop}
BackdropProps={{
  timeout: 500,
}}
>
<Fade in={otpOpen}>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
      minWidth: 1000,
      borderRadius: 2


    }}
  >
    <Button onClick={handleSignupToggle}>Close</Button>

    <Grid container>
      <Grid item xs={12} sm={12} md={7} lg={7} xl={7} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <img src={loginimg} width={'75%'} alt="" />
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={5} >
        <Box sx={{ backgroundColor: '#cfd8dc', borderRadius: 2, padding: 2 }} >
          <Grid item display={'flex'} justifyContent={'center'} flexDirection={'column'} >

            <Grid item display={{ xs: 'none', sm: 'none', md: 'flex' }} justifyContent={'center'} alignItems={'center'} mt={5} >
              <img src={Logo} width={'70%'} alt="" />
            </Grid>
            <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} mt={2} >

              <Typography variant='subtitle1' sx={{ fontSize: { xs: '22px', sm: '22px', md: '22px', lg: '22px', xl: '25px' } }} fontWeight={600}>
                OTP Confirmation</Typography>
            </Grid>


            <Grid container p={5} spacing={1} >
              <Grid item lg={3}>
                <TextField id="outlined-basic" variant="outlined" />

              </Grid>
              <Grid item lg={3}>
                <TextField id="outlined-basic" variant="outlined" />

              </Grid>
              <Grid item lg={3}>
                <TextField id="outlined-basic" variant="outlined" />

              </Grid>
              <Grid item lg={3}>
                <TextField id="outlined-basic" variant="outlined" />

              </Grid>
            </Grid>

            <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} mt={2} >

              <Typography variant='subtitle1' sx={{ fontSize: { xs: '14', sm: '14', md: '14', lg: '14', xl: '16' } }} color={'#b0bec5'} fontWeight={600}>
                Resend OTP <span style={{ color: '#546e7a' }}>2.00</span>
              </Typography>
            </Grid>


            <Button variant="contained" sx={{ mt: 10, '&:hover': { backgroundColor: 'primary.main' }, fontSize: { xs: '17px', sm: '17px', md: '17px', lg: '14px', xl: '23px' } }}>NEXT</Button>


          </Grid>
        </Box>
      </Grid>

    </Grid>
  </Box>
</Fade>
</Modal>  */}
    </Box>
  );
}

export default Header;



