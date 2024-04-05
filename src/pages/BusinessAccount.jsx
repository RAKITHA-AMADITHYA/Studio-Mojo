import React from 'react'
import ContainerForm from '../components/ContainerForm/ContainerForm'
import { Checkbox, Divider, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const BusinessAccount = () => {
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

    return (
        <div style={{ padding: 10 }}>
            <ContainerForm>
                <Typography sx={{ mt: 3, color: "#616161" }} variant='h6'>Create Business Account</Typography>
                <Divider sx={{ my: 2 }} />

                <Grid container spacing={2} rowGap={2}>
                    {/* First Name field */}
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={4} flexDirection={'column'}>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth />
                    </Grid>

                    {/* Last Name field */}
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={4} flexDirection={'column'}>
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth />
                    </Grid>

                    {/* Email field */}
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={4} flexDirection={'column'}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                    </Grid>

                    {/* Contact field */}
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={4} flexDirection={'column'}>
                        <TextField id="outlined-basic" label="Contact" variant="outlined" fullWidth />
                    </Grid>

                    {/* BR Code field */}
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={4} flexDirection={'column'}>
                        <TextField id="outlined-basic" label="BR Code" variant="outlined" fullWidth />
                    </Grid>

                    {/* Password field */}
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={4} flexDirection={'column'}>
                        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth disabled />
                    </Grid>

                    {/* Confirm Password field */}
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={4} flexDirection={'column'}>
                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" fullWidth />
                    </Grid>

                    {/* Upload File button */}
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={4} flexDirection={'column'} mt={2}>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                            fullWidth
                            sx={{
                                '&:hover': {
                                    backgroundColor: '#1976d2', // Primary color
                                },
                            }}
                        >
                            Upload File
                            <VisuallyHiddenInput type="file" />
                        </Button>
                    </Grid>

                    {/* Terms & Conditions Checkbox */}
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} flexDirection={'column'} mt={2}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="I have read and agree to Terms & Conditions"
                        />
                    </Grid>

                    {/* Create Account Button */}
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={4} flexDirection={'column'} mt={2} display={'flex'} justifyContent={'center'}>
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

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={4} flexDirection={'column'} mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>

                        {/* Register Link */}
                        <Typography variant="subtitle1" color="primary" sx={{ mt: 2 }}>
                            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Already have an account ? Log In</Link>
                        </Typography>
                    </Grid>
                </Grid>

            </ContainerForm>
        </div>
    )
}

export default BusinessAccount
