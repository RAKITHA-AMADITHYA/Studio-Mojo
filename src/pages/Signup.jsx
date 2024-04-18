import React from 'react'
import ContainerForm from '../components/ContainerForm/ContainerForm'
import { Grid, Typography, TextField, FormControlLabel, Checkbox, Button, Box } from '@mui/material'
import loginimg from '../assets/Group 112.png'
import logo from '../assets/logo.png'

import { Link } from 'react-router-dom'

const Signup = () => {


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 25 }}>
                {/* <ContainerForm> */}
                <Grid container   >
                    <Grid item xs={12} sm={12} md={7} lg={7} xl={7} display={{ xs: 'none', sm: 'none', md: 'flex' }} justifyContent={'center'}>
                        <img src={loginimg}    alt="" />
                    </Grid>

                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5} >
                        <Box  sx={{ backgroundColor: '#e0e0e0', p: 3,borderRadius:2,height:'100%'}} >
                            <Grid item display={'flex'}  justifyContent={'center'} flexDirection={'column'} >
                                <TextField sx={{ mt: 5 }} id="outlined-basic" label="Enter Mobile Number" variant="outlined" />
                                <Grid item display={'flex'} justifyContent={'start'} alignItems={'start'} mt={4} >

                                    <Typography variant='subtitle1' sx={{ fontSize: { xs: '18px', sm: '18px', md: '18px', lg: '18px', xl: '25px' } }} fontWeight={600}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                        molestiae</Typography>
                                </Grid>


                                <Grid item display={'flex'} justifyContent={'start'} alignItems={'start'} mt={2} >

                                    <Typography variant='subtitle2' sx={{ fontSize: { xs: '17px', sm: '17px', md: '17px', lg: '17px', xl: '23px' } }} fontWeight={300}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                        numquam blanditiis harum quisquam eius sed odit fugiat</Typography>
                                </Grid>


                                <Button variant="contained" sx={{ mt: 8, '&:hover': { backgroundColor: 'primary.main' }, fontSize: { xs: '17px', sm: '17px', md: '17px', lg: '17px', xl: '23px' } }}>NEXT</Button>
                                <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} mt={5} >
                                    <img src={logo} width={'50%'} alt="" />
                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                {/* </ContainerForm> */}
            </div>
        </>













        // <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        //     <Box sx={{
        //         borderRadius: 3,
        //         backgroundColor: '#bdbdbd                ',
        //         mt: 10,
        //         p: 1
        //     }}>
        //         <Grid item display={'flex'} justifyContent={'center'} flexDirection={'column'} textAlign={'center'} p={5}>
        //             <Typography variant='h2' sx={{ fontSize: { xs: '30px', sm: '40px', md: '40px', lg: '50px', xl: '80px' }, }}>Create Account</Typography>
        //             <Typography variant='subtitle1' sx={{ fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px', xl: '30px' } }}>
        //                 <span style={{ fontSize: 20 }}>
        //                     Unlock a World of Possibilities.
        //                 </span>{" "}
        //                 <span style={{ color: '#000000', fontSize: 20, fontWeight: 500 }}>
        //                     Join Us Today!
        //                 </span>
        //             </Typography>
        //             <Typography mt={5} variant='subtitle1' fontWeight={500}>Choose your account type</Typography>

        //             <Grid container spacing={2} mt={2}>
        //                 <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        //                     <Link to="/signup/personal-account" style={{ textDecoration: 'none' }}>
        //                         <Box
        //                             sx={{
        //                                 borderRadius: 2,
        //                                 backgroundColor: 'white',
        //                                 display: 'flex',
        //                                 flexDirection: 'column',
        //                                 justifyContent: 'center',
        //                                 color: '#000000',
        //                                 alignItems: 'center',
        //                                 p: 2,
        //                                 '&:hover': {
        //                                     backgroundColor: '#CEE5F3',
        //                                     cursor: 'pointer',
        //                                 },
        //                             }}
        //                         >
        //                             <img src={person} width={50} alt="" />
        //                             <Typography mt={1} variant='h6' fontWeight={500}>Personal</Typography>
        //                         </Box>
        //                     </Link>
        //                 </Grid>
        //                 <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        //                     <Link to="/signup/business-account" style={{ textDecoration: 'none' }}>
        //                         <Box
        //                             sx={{
        //                                 borderRadius: 2,
        //                                 backgroundColor: 'white',
        //                                 display: 'flex',
        //                                 color: '#000000',
        //                                 flexDirection: 'column',
        //                                 justifyContent: 'center',
        //                                 alignItems: 'center',
        //                                 p: 2,
        //                                 '&:hover': {
        //                                     backgroundColor: '#CEE5F3',
        //                                     cursor: 'pointer',
        //                                 },
        //                             }}
        //                         >
        //                             <img src={business} width={50} alt="" />
        //                             <Typography mt={1} variant='h6' fontWeight={500}>Business</Typography>
        //                         </Box>
        //                     </Link>
        //                 </Grid>

        //             </Grid>

        //         </Grid>
        //     </Box>

        // </div>
    )
}

export default Signup
