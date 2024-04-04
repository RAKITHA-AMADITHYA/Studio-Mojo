import React from 'react';
import { Box, Grid, Badge, Stack, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
      }}
    >
      <Grid container p={1}>
        {/* Logo */}
        <Grid item xs={11} sm={11} md={2} lg={2} xl={10} display={'flex'} justifyContent={'start'} alignItems={'center'}>
          <img src={Logo} width={'200px'} alt="" />
        </Grid>
        <Grid item xs={1} sm={1} md={1} display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }} justifyContent={'center'} alignItems={'center'}>
          <Badge color="primary">
            <MenuIcon color="action" />
          </Badge>
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
                  textDecoration: 'none', 
                },
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
            <Button variant="contained" component={Link} to="/signup">Signup</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
