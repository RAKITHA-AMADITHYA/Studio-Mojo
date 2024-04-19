import React, { useState } from 'react';
import { Box, Grid, Badge, Stack, Button, Typography, MenuItem, Modal, Backdrop, Fade, TextField, IconButton, Select, styled, FormControlLabel, Checkbox, Drawer } from "@mui/material";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/logo.png';
import loginimg from '../assets/SignupImg2.png'
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


function Header() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [personalAcc, setPersonalAcc] = useState(false);
  const [businessAcc, setBusinessAcc] = useState(false);
  const [loginSignup, setloginSignup] = useState(false);

  const [activeButton, setActiveButton] = useState('personal');



  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


  const handleButtonClick = (type) => {
    setActiveButton(type);
  };


  const handleToggle = () => {
    setOpen(!open);
  };

  const handleLoginToggle = () => {
    setLoginOpen(!loginOpen);
  };

  const handleCloseLoginToggle = () => {
    setLoginOpen(false);
    setSignupOpen(false)
  };

  const handleSignupToggle = () => {
    setSignupOpen(!signupOpen);
  };

  const handleLoginSignupToggle = () => {
    setSignupOpen(!signupOpen);
    setLoginOpen(false)
  };

  const handleOtpToggle = () => {
    setSignupOpen(false);
    setOtpOpen(!otpOpen);

  };

  const handlePersonalAccToggle = () => {
    setOtpOpen(false);
    setPersonalAcc(!personalAcc);

  };

  const handleClosePersonalAccToggle = () => {
    setPersonalAcc(false);

  };

  const handleOpenPersonalAccToggle = () => {
    setBusinessAcc(false);
    setPersonalAcc(!personalAcc);

  };

  const handleBusinessAccToggle = () => {
    setPersonalAcc(false);
    setBusinessAcc(!businessAcc);

  };

  const handleCloseBusinessAccToggle = () => {
    setBusinessAcc(false);

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
        <Grid item xs={11} sm={11} md={2} lg={2} xl={2} display={'flex'} justifyContent={'start'} alignItems={'center'} >
          <Link to="/">
            <img src={Logo} width={'100%'} alt="" />
          </Link>
        </Grid>
        <Grid item xs={1} sm={1} md={1} display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }} justifyContent={'center'} alignItems={'center'}>
          <Badge color="primary">
            <MenuIcon color="action" onClick={handleToggle} />
          </Badge>
        </Grid>

        <Drawer anchor="right" open={open} onClose={handleToggle}  >

        <Box sx={{ width: 150, padding: 2 }}>

          <Grid item xs={12} sm={12} height={20} maxHeight={'20px'} mt={5}>
            <Link to="/">
              <img src={Logo} width={'100px'} alt="" />
            </Link>
          </Grid>
          {/* features */}
          <Grid item mt={2}                   onClick={handleLinkClick}
>
            <Typography
              variant='body1'
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

          {/* Pricing */}
          <Grid item mt={2}                   onClick={handleLinkClick}
>
            <Typography
              variant='body1'
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

          {/* Resources */}
          <Grid item mt={2}                   onClick={handleLinkClick}
>
            <Typography
              variant='body1'
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


          <Grid item mt={2}                   onClick={handleLinkClick}
>
            <Typography
              variant='body1'
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
          <Grid item mt={10}>
          <Button variant="outlined" onClick={handleLoginToggle} fullWidth >Login</Button>
</Grid>

<Grid item mt={1}>
<Button variant="contained" fullWidth onClick={handleSignupToggle}>Signup</Button>
</Grid>
          </Box>
          {/* Add more nav links here */}
        </Drawer>


        {/* Nav Links */}
        <Grid item md={8} lg={8} xl={8} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent={'center'} p={2}>

          <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>

            {/* Features */}
            <Grid item mt={1} xs={3} sm={3} md={3} lg={3} xl={3}>

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

            {/* Pricing */}
            <Grid item mt={1} xs={3} sm={3} md={3} lg={3} xl={3}>
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

            {/* Resourses */}
            <Grid item mt={1} xs={3} sm={3} md={3} lg={3} xl={3}>
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

            {/* About Us */}
            <Grid item mt={1} xs={3} sm={3} md={3} lg={3} xl={3}>
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

            {/* Btn Login */}
            <Button variant="outlined" onClick={handleLoginToggle} >Login</Button>

            {/* Btn sign up */}
            <Button variant="contained" onClick={handleSignupToggle}>Signup</Button>
          </Stack>
        </Grid>
      </Grid>

      {/* Login Modal */}
      <Modal
        open={loginOpen}
        onClose={handleCloseLoginToggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={loginOpen}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 5,
              minWidth: { xs: '300px', sm: '400px', md: '700px', lg: '850px', xl: '1000px' },

              borderRadius: 2,



            }}
          >
            {/* Colse btn */}
            <IconButton onClick={handleCloseLoginToggle} color="primary" aria-label="add to shopping cart">
              <CloseIcon />
            </IconButton>


            <Grid container spacing={1}>
              {/* modal image */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent={'center'} alignItems={'center'}>
                <img src={loginimg} alt="" />
              </Grid>

              {/* Modal content */}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display={'flex'} justifyContent={'center'} alignContent={'center'} >
                <Box sx={{ backgroundColor: '#cfd8dc', borderRadius: 2, padding: 2, width: '100%' }} >
                  <Grid item display={'flex'} justifyContent={'center'} flexDirection={'column'} >

                    <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} mt={2} >
                      <img src={Logo} width={'70%'} alt="" />
                    </Grid>


                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'} mt={2}>

                      <Typography variant='subtitle2'
                        sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                        Enter Email  <span style={{ color: '#0070C0' }}>*</span></Typography>
                      <TextField
                        id="outlined-basic"
                        // label="Tp Number"
                        variant="outlined"
                        fullWidth
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            height: '40px', // Set the desired height
                          },
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#757575',
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'} mt={1}>

                      <Typography variant='subtitle2'
                        sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                        Enter Password  <span style={{ color: '#0070C0' }}>*</span></Typography>
                      <TextField
                        id="outlined-basic"
                        // label="Tp Number"
                        type='password'
                        variant="outlined"
                        fullWidth
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            height: '40px', // Set the desired height
                          },
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#757575',
                          },
                        }}
                      />
                    </Grid>



                    <Grid container alignItems="center" justifyContent="space-between" mt={2}>
                      <Grid item>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="Remember Me"

                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" color="primary">Forgot Password?</Typography>
                      </Grid>
                    </Grid>







                    <Button variant="contained" sx={{
                      mt: 2, '&:hover': { backgroundColor: 'primary.main' },
                      fontSize: { xs: '17px', sm: '17px', md: '17px', lg: '14px', xl: '23px' }
                    }} onClick={handleOtpToggle}>NEXT</Button>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} flexDirection={'column'} display={'flex'} textAlign={'center'} mt={1}>
                      <Typography variant="subtitle1" color="primary" sx={{ mt: 2 }}>
                        <Typography variant='h6' sx={{ fontSize: { xs: '15px', sm: '15px', md: '15px', lg: '15px', xl: '15px' }, fontWeight: 600 }}>
                          Don’t have an account?{' '}
                          <span style={{ color: '#0070C0', cursor: 'pointer' }} onClick={handleLoginSignupToggle}>
                            Register here
                          </span>
                        </Typography>
                      </Typography>


                    </Grid>




                  </Grid>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Fade>
      </Modal>









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
            {/* Colse btn */}
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

                    {/*Username */}
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


                    <Grid container p={5} spacing={1} display={'flex'} justifyContent={'center'}>
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
                        <TextField id="outlined-basic" variant="outlined" fullWidth InputProps={{
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
                        <TextField id="outlined-basic" variant="outlined" fullWidth InputProps={{
                          sx: {
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#9e9e9e',
                            },
                          },
                        }} />

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
                    }} onClick={handlePersonalAccToggle}>Submit</Button>


                  </Grid>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Fade>
      </Modal>


      {/* Personal account register  Modal */}
      <Modal
        open={personalAcc}
        onClose={handleOtpToggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={personalAcc}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 3,
              minWidth: { xs: '300px', sm: '400px', md: '900px', lg: '1200px', xl: '1500px' },
              minHeight: { xs: '500px', sm: '400px', md: '500px', lg: '600px', xl: '600px' },
              maxHeight: { xs: '600px', sm: '500px', md: '50px', lg: '600px', xl: '600px' },
              overflowY: 'auto',  // Make the box scrollable if y-axis overflows
              borderRadius: 2,

              '&::-webkit-scrollbar': {
                width: '0 !important',  // Hide the scrollbar
              },
              '&::-webkit-scrollbar-thumb': {
                display: 'none',  // Hide the scrollbar thumb
              },
            }}
          >
            <Grid container>
              <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
                <img src={Logo} width={'20%'} alt="" />
              </Grid>


              <Grid item xs={1} sm={1} md={1} lg={1} xl={1} display={'flex'} justifyContent={'end'}>

                <IconButton onClick={handleClosePersonalAccToggle} color="primary" aria-label="add to shopping cart">
                  <CloseIcon />
                </IconButton>
              </Grid>



              <Grid container display={'flex'} justifyContent={'start'} alignItems={'start'} textAlign={'start'} spacing={1} >
                {/* Personal Account */}
                <Grid item mt={1} xs={6} sm={6} md={4} lg={2} xl={2} display={'flex'} justifyContent={'center'} textAlign={'center'}>
                  <Button
                    variant={activeButton === 'personal' ? 'contained' : 'outlined'}
                    disableElevation
                    fullWidth

                    onClick={() => handleButtonClick('personal')
                    }
                  >
                    Personal account
                  </Button>
                </Grid>

                {/* Business Account */}
                <Grid item mt={1} xs={6} sm={6} md={4} lg={2} xl={2} display={'flex'} textAlign={'center'}>
                  <Button
                    variant={activeButton === 'business' ? 'contained' : 'outlined'}
                    disableElevation
                    fullWidth
                    onClick={() => {
                      handleButtonClick('business');
                      handleBusinessAccToggle();
                    }}
                  >
                    Business Account
                  </Button>
                </Grid>
              </Grid>
            </Grid>



            {/* Personal account Modal content */}
            <Grid container spacing={1} rowGap={1} mt={1}>

              {/*  First Name  field */}
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  First Name  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '50px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575', // Set the border color
                    }
                  }}
                />
              </Grid>

              {/*  Last Name  field */}
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Last Name  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '50px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                />
              </Grid>

              {/* Mobile Number field */}
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Mobile Number <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '50px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                />
              </Grid>


              {/* Email  field */}
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Email  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '50px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                />
              </Grid>




              {/*  Nature of the Business  field */}
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>
                <Typography variant='subtitle2' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Nature of the business  <span style={{ color: '#0070C0' }}>*</span>
                </Typography>
                <Select
                  id="nature-of-business"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '50px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                >
                  {/* Placeholder for the first item */}
                  <MenuItem value="">
                    <em>Select Nature of Business</em>
                  </MenuItem>
                  {/* List of legal businesses */}
                  <MenuItem value="Business 1">Business 1</MenuItem>
                  <MenuItem value="Business 2">Business 2</MenuItem>
                  {/* Add more MenuItem components for each legal business */}
                </Select>
              </Grid>


              {/*  NIC  field */}
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  NIC  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '50px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                />
              </Grid>



              {/*  Address  field */}
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} flexDirection={'column'} >

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Address  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      width: 'auto', // Set the desired width
                      height: '50px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                />
              </Grid>

              {/*  Gender  field */}
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} flexDirection={'column'} >

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Gender  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      width: 'auto', // Set the desired width
                      height: '50px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                />
              </Grid>

              {/*  Comments  field */}
              <Grid item xs={12} sm={12} md={6} lg={8} xl={8} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Comments  </Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      // width: 'auto', // Set the desired width
                      height: '150px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                />
              </Grid>


              {/*  Upload NIC or DL Copy:  field */}
              <Grid item xs={12} sm={12} md={6} lg={4} xl={4} flexDirection={'column'} display={'flex'} justifyContent={'start'} alignItems={'start'} >

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Upload NIC or DL Copy:  </Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '100px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                />

                <Button
                  component="label"
                  role={undefined}
                  variant="outlined"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  sx={{ mt: 2 }}
                  fullWidth

                >
                  Upload file
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Grid>
              {/* Terms & Conditions Checkbox */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} flexDirection={'column'} >
                <FormControlLabel
                  control={<Checkbox />}
                  label="I have read and agree to Terms & Conditions"
                />
              </Grid>

              {/* Submit btn */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} flexDirection={'column'} display={'flex'} justifyContent={'end'} alignItems={'end'}>
                <Button
                  variant="contained"
                  disableElevation
                  onClick={handleLinkClick}

                  sx={{
                    '&:hover': {
                      backgroundColor: '#1976d2', // Primary color
                    },
                  }}
                >
                  Create Account
                </Button>
              </Grid>


            </Grid>








          </Box>
        </Fade>
      </Modal>



      {/* Business account Reg Modal */}
      <Modal
        open={businessAcc}
        onClose={handleBusinessAccToggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={businessAcc}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 3,
              minWidth: { xs: '300px', sm: '400px', md: '900px', lg: '1200px', xl: '1500px' },
              minHeight: { xs: '500px', sm: '400px', md: '500px', lg: '600px', xl: '600px' },
              maxHeight: { xs: '600px', sm: '500px', md: '50px', lg: '600px', xl: '600px' },
              overflowY: 'auto',  // Make the box scrollable if y-axis overflows
              borderRadius: 2,

              '&::-webkit-scrollbar': {
                width: '0 !important',  // Hide the scrollbar
              },
              '&::-webkit-scrollbar-thumb': {
                display: 'none',  // Hide the scrollbar thumb
              },
            }}
          >
            <Grid container>
              <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
                <img src={Logo} width={'20%'} alt="" />
              </Grid>


              <Grid item xs={1} sm={1} md={1} lg={1} xl={1} display={'flex'} justifyContent={'end'}>

                <IconButton onClick={handleCloseBusinessAccToggle} color="primary" aria-label="add to shopping cart">
                  <CloseIcon />
                </IconButton>
              </Grid>



              <Grid container display={'flex'} justifyContent={'start'} alignItems={'start'} textAlign={'start'} spacing={1} >
                {/* Personal Account */}
                <Grid item mt={1} xs={6} sm={6} md={4} lg={2} xl={2} display={'flex'} justifyContent={'center'} textAlign={'center'}>
                  <Button
                    variant={activeButton === 'personal' ? 'contained' : 'outlined'}
                    disableElevation
                    fullWidth

                    // onClick={() => handleButtonClick('personal');
                    // handleBusinessAccToggle();
                    // }

                    onClick={() => {
                      handleButtonClick('personal');
                      handleOpenPersonalAccToggle();
                    }}
                  >
                    Personal account
                  </Button>
                </Grid>

                {/* Business Account */}
                <Grid item mt={1} xs={6} sm={6} md={4} lg={2} xl={2} display={'flex'} textAlign={'center'}>
                  <Button
                    variant={activeButton === 'business' ? 'contained' : 'outlined'}
                    disableElevation
                    fullWidth
                    onClick={() => {
                      handleButtonClick('business');
                      handleBusinessAccToggle();
                    }}
                  >
                    Business Account
                  </Button>
                </Grid>
              </Grid>
            </Grid>



            {/* Business account Modal content */}
            <Grid container spacing={1} rowGap={1} mt={1}>

              {/*   Company Name  field */}
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Company Name  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '50px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                />
              </Grid>

              {/*   Your Name  field */}
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Your Name  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '50px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                />
              </Grid>


              {/* Mobile Number field */}
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Mobile Number <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '50px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575', // Set the border color
                    }
                  }}
                />
              </Grid>


              {/* Email Address  field */}
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Email Address  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '50px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                />
              </Grid>




              {/*   Business  type field */}
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>
                <Typography variant='subtitle2' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  business type  <span style={{ color: '#0070C0' }}>*</span>
                </Typography>
                <Select
                  id="nature-of-business"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '50px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                >
                  {/* Placeholder for the first item */}
                  <MenuItem value="">
                    <em>Select Nature of Business</em>
                  </MenuItem>
                  {/* List of legal businesses */}
                  <MenuItem value="Business 1">Business 1</MenuItem>
                  <MenuItem value="Business 2">Business 2</MenuItem>
                  {/* Add more MenuItem components for each legal business */}
                </Select>
              </Grid>


              {/*  NIC  field */}
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  NIC  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '50px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                />
              </Grid>


              {/*  BR  field */}
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} flexDirection={'column'} >

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  BR Number  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      width: 'auto', // Set the desired width
                      height: '50px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                />
              </Grid>
              {/*  Address  field */}
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} flexDirection={'column'} >

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Address  <span style={{ color: '#0070C0' }}>*</span></Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      width: 'auto', // Set the desired width
                      height: '50px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                />
              </Grid>



              {/*  Comments  field */}
              <Grid item xs={12} sm={12} md={6} lg={8} xl={8} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'start'}>

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Comments  </Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      // width: 'auto', // Set the desired width
                      height: '150px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                />
              </Grid>


              {/*  Upload NIC or DL Copy:  field */}
              <Grid item xs={12} sm={12} md={6} lg={4} xl={4} flexDirection={'column'} display={'flex'} justifyContent={'start'} alignItems={'start'} >

                <Typography variant='subtitle2'
                  sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={600}>
                  Upload NIC or DL Copy:  </Typography>
                <TextField
                  id="outlined-basic"
                  // label="Tp Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '100px', // Set the desired height
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
                    },
                  }}
                />

                <Button
                  component="label"
                  role={undefined}
                  variant="outlined"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  sx={{ mt: 2 }}
                  fullWidth
                  onClick={handleLinkClick}


                >
                  Upload file
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Grid>
              {/* Terms & Conditions Checkbox */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} flexDirection={'column'} >
                <FormControlLabel
                  control={<Checkbox />}
                  label="I have read and agree to Terms & Conditions"
                />
              </Grid>

              {/* Submit btn */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} flexDirection={'column'} display={'flex'} justifyContent={'end'} alignItems={'end'}>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    '&:hover': {
                      backgroundColor: '#1976d2', // Primary color
                    },
                  }}
                >
                  Create Account
                </Button>
              </Grid>


            </Grid>








          </Box>
        </Fade>
      </Modal>



    </Box>
  );
}

export default Header;



