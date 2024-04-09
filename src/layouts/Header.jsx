import React, { useState } from 'react';
import { Box, Grid, Badge, Stack, Button, Typography, Drawer } from "@mui/material";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/logo.png';

function Header() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
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
          <Drawer
            anchor="right"
            open={open}
            onClose={handleToggle}
          >
            <Box sx={{ p: 2, width: 200 }}>

              <Grid item>
                <img src={Logo} alt="" />
              </Grid>
              <Grid item display={'flex'} justifyContent={'cente'} alignItems={'center'} mt={10}>
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
                >
                  Features
                </Typography>
              </Grid>

              <Grid item display={'flex'} justifyContent={'cente'} alignItems={'center'} mt={1}>
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
                >
                  Pricing
                </Typography>
              </Grid>


              <Grid item display={'flex'} justifyContent={'cente'} alignItems={'center'} mt={1}>
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
                >
                  Resources
                </Typography>
              </Grid>

              <Grid item display={'flex'} justifyContent={'cente'} alignItems={'center'} mt={1}>
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
                >
                  About Us
                </Typography>
              </Grid>

              <Grid item display={'flex'} justifyContent={'cente'} alignItems={'center'} mt={40}>
                <Button
                  component={Link}
                  to="/login"
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    bgcolor: '#0070C0'
                  }}
                >
                  Login
                </Button>
              </Grid>

            </Box>
          </Drawer>
        </Grid>

        {/* Nav Links */}
        <Grid item md={8} lg={8} xl={8} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent={'center'} p={2}>
          <Stack direction="row" spacing={10} alignItems="center">
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
              }}
            >
              Features
            </Typography>
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
              }}
            >
              Pricing
            </Typography>
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
              }}
            >
              Resources
            </Typography>
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
              }}
            >
              About Us
            </Typography>
          </Stack>
        </Grid>

        {/* Login Signup */}
        <Grid item display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} md={2} lg={2} xl={2} justifyContent={'center'} p={1}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button component={Link} to="/login">Login</Button>
            <Button
              variant="contained"
              component={Link}
              to="/signup"
              sx={{
                '&:hover': {
                  backgroundColor: '#0070C0', // Change background color on hover
                },
              }}
            >Signup</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
