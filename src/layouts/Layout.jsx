import { Box } from '@mui/material';
import Header from './Header';
import { Outlet } from 'react-router-dom';

// function Layout() {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column'}}>
//       <Header />
//       <div style={{ flex: 50 }}>
//         <Outlet />
//       </div>
//     </div>
//   );
// }
function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden',backgroundColor:'#eeeeee' }}>
        <Outlet/>
        
      </Box>
    </Box>
  );
}

export default Layout;
