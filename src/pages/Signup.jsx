import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import person from '../assets/person.png';
import business from '../assets/business.png';
import { Link } from 'react-router-dom';


const Signup = () => {


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <Box sx={{
                borderRadius: 3,
                backgroundColor: '#bdbdbd                ',
                mt: 10,
                p: 1
            }}>
                <Grid item display={'flex'} justifyContent={'center'} flexDirection={'column'} textAlign={'center'} p={5}>
                    <Typography variant='h2' sx={{ fontSize: { xs: '30px', sm: '40px', md: '40px', lg: '50px', xl: '80px' }, }}>Create Account</Typography>
                    <Typography variant='subtitle1' sx={{ fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px', xl: '30px' } }}>
                        <span style={{ fontSize: 20 }}>
                            Unlock a World of Possibilities.
                        </span>{" "}
                        <span style={{ color: '#000000', fontSize: 20, fontWeight: 500 }}>
                            Join Us Today!
                        </span>
                    </Typography>
                    <Typography mt={5} variant='subtitle1' fontWeight={500}>Choose your account type</Typography>

                    <Grid container spacing={2} mt={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Link to="/signup/personal-account" style={{ textDecoration: 'none' }}>
                                <Box
                                    sx={{
                                        borderRadius: 2,
                                        backgroundColor: 'white',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        color: '#000000',
                                        alignItems: 'center',
                                        p: 2,
                                        '&:hover': {
                                            backgroundColor: '#CEE5F3',
                                            cursor: 'pointer',
                                        },
                                    }}
                                >
                                    <img src={person} width={50} alt="" />
                                    <Typography mt={1} variant='h6' fontWeight={500}>Personal</Typography>
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Link to="/signup/business-account" style={{ textDecoration: 'none' }}>
                                <Box
                                    sx={{
                                        borderRadius: 2,
                                        backgroundColor: 'white',
                                        display: 'flex',
                                        color: '#000000',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        p: 2,
                                        '&:hover': {
                                            backgroundColor: '#CEE5F3',
                                            cursor: 'pointer',
                                        },
                                    }}
                                >
                                    <img src={business} width={50} alt="" />
                                    <Typography mt={1} variant='h6' fontWeight={500}>Business</Typography>
                                </Box>
                            </Link>
                        </Grid>

                    </Grid>

                </Grid>
            </Box>

        </div>
    )
}

export default Signup
