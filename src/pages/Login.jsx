import React from 'react'
import ContainerForm from '../components/ContainerForm/ContainerForm'
import { Grid, Typography, TextField, FormControlLabel, Checkbox, Button, Box } from '@mui/material'
import loginimg from '../assets/Login.png'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 25 }}>
            {/* <ContainerForm> */}
            <Grid container>
                <Grid item xs={12} sm={12} md={7} lg={7} xl={7} sx={{ backgroundImage: `url(${loginimg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: 'auto', flexDirection: 'column' }}>
                    <Grid item p={2} lg={5}>
                        <Typography variant='h1' color={'white'} fontWeight={600}>Welcome Back</Typography>
                    </Grid>
                    <Grid item p={2}>
                        <Typography variant='h4' color={'white'} fontWeight={400}>Your journey continues</Typography>
                    </Grid>
                    {/* </Grid> */}
                </Grid>

                <Grid item xs={12} sm={12} md={5} lg={5} xl={5} >
                    <Box sx={{backgroundColor:'#f5f5f5',p:5 ,borderTopRightRadius:15,borderBottomRightRadius:15}} >
                    <Grid item display={'flex'} justifyContent={'center'} flexDirection={'column'} textAlign={'center'} mt={2}>
                        <Typography variant='h2'>Login</Typography>
                        <Typography variant='subtitle1'>Unlock a World of Possibilities. Join Us Today!</Typography>
                        <TextField sx={{ mt: 5 }} id="outlined-basic" label="Enter your Email" variant="outlined" />
                        <TextField sx={{ mt: 3 }} id="outlined-basic" label="Enter your Password" variant="outlined" />
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
                        <Button variant="contained" sx={{ mt: 2, '&:hover': { backgroundColor: 'primary.main' } }}>Login</Button>
                        <Typography variant="subtitle1" color="primary" sx={{mt:2}}>
                                    <Link to="/signup" style={{  textDecoration: 'none',color:'inherit' }}>Don’t have an account? Register here</Link>
                                </Typography>
                    </Grid>
                    </Box>
                </Grid>
            </Grid>
            {/* </ContainerForm> */}
        </div>
    )
}

export default Login
