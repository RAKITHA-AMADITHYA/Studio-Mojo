import { Box, Grid } from '@mui/material'
import React from 'react'

const ContainerForm = (props) => {
  return (
    <Grid container p={2}>
        <Box
                sx={{
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    p: 2,

                }}
            >

                {props.children}
            </Box>
    </Grid>

  )
}

export default ContainerForm
