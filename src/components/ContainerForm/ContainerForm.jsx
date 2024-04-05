import { Box, Grid } from '@mui/material'
import React from 'react'

const ContainerForm = (props) => {
  return (
    <Grid container justifyContent="center" alignItems="center" >
        <Box
    sx={{
      backgroundColor: '#f5f5f5',
      borderRadius: 2,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      width: '100%', // Full width on xs and sm screens
      height: '100%',
      p: 2,
      [`@media (min-width: 1280px)`]: {
        // 1280px is lg breakpoint
        width: '60%', // 60% width on lg and xl screens
      },
    }}
  >
        {props.children}
      </Box>
   </Grid>
  )
}

export default ContainerForm
