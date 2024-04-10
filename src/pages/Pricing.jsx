import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import pricing1 from '../assets/pricing1.png';
import pricing2 from '../assets/pricing2.png';

const Pricing = () => {
  return (
    <>
      {/* Section 1 */}
      <Grid item display={'flex'} justifyContent={'center'} flexDirection={'column'} textAlign={'center'} mt={2} p={5}>
        <Typography variant='h2' sx={{ fontSize: { xs: '30px', sm: '40px', md: '40px', lg: '50px', xl: '80px' }, }}>Find the Perfect Plan</Typography>
        <Typography variant='h6' sx={{ fontSize: { xs: '20px', sm: '20px', md: '20px', lg: '20px', xl: '30px' } }}>Affordable Solutions Tailored Just for You!</Typography>
      </Grid>

      {/* card 2 */}
      <Grid container p={2} spacing={10}   pl={{ xs: 2, sm: 2, md:10,lg:8,xl:20 }} 
  pr={{ xs: 2, sm: 2,md:10,lg:8,xl:20 }}>












      <Grid item m={4} mt={2}>
        <Box sx={{ borderRadius: 2, background: '#CEE5F3' }}>
          <Grid container p={4}>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} display={{ xs: 'flex', sm: 'flex', md: 'none' }}
              justifyContent={'center'}>
              <img src={pricing1} width={'70%'} alt="" />
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <Typography variant='h3'>SMS</Typography>
              <Typography variant='h6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Typography>
              {/* Table */}
              <TableContainer sx={{ mt: 2 }}>
                <Table>
                  <TableHead style={{ backgroundColor: '#0070C0' }}>
                    <TableRow style={{ backgroundColor: '#0070C0' }} >
                      <TableCell><Typography variant='subtitle1' color='#0070C0'>Number of messages</Typography></TableCell>
                      <TableCell><Typography variant='subtitle1' color='#0070C0'>Your own contact lists</Typography></TableCell>
                      <TableCell><Typography variant='subtitle1' color='#0070C0'>StudioMOJO database</Typography></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Dummy data */}
                    <TableRow>
                      <TableCell>1000</TableCell>
                      <TableCell>0.50</TableCell>
                      <TableCell>1.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2000</TableCell>
                      <TableCell>0.50</TableCell>
                      <TableCell>1.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3000</TableCell>
                      <TableCell>0.50</TableCell>
                      <TableCell>1.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} display={{ xs: 'none', sm: 'none', md: 'flex' }}
              justifyContent={'center'}>
              <img src={pricing1} width={'80%'} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Grid>


      <Grid item m={4} mt={2}>
        <Box sx={{ borderRadius: 2, background: '#CEE5F3' }}>
          <Grid container p={4}><Grid item xs={12} sm={12} md={5} lg={5} xl={5} display={'flex'} justifyContent={'center'}>
            <img src={pricing2} width={'70%'} alt="" />
          </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <Typography variant='h3'>OBD</Typography>
              <Typography variant='h6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Typography>
              {/* Table */}
              <TableContainer sx={{ mt: 2 }}>
                <Table>
                  <TableHead style={{ backgroundColor: '#0070C0' }}>
                    <TableRow style={{ backgroundColor: '#0070C0' }} >
                      <TableCell><Typography variant='subtitle1' color='#0070C0'>Number of messages</Typography></TableCell>
                      <TableCell><Typography variant='subtitle1' color='#0070C0'>Your own contact lists</Typography></TableCell>
                      <TableCell><Typography variant='subtitle1' color='#0070C0'>StudioMOJO database</Typography></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Dummy data */}
                    <TableRow>
                      <TableCell>1000</TableCell>
                      <TableCell>0.50</TableCell>
                      <TableCell>1.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2000</TableCell>
                      <TableCell>0.50</TableCell>
                      <TableCell>1.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3000</TableCell>
                      <TableCell>0.50</TableCell>
                      <TableCell>1.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

          </Grid>
        </Box>
      </Grid>
      </Grid>
    </>
  );
};

export default Pricing;
