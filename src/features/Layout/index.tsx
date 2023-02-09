import Navbar from 'features/Layout/Navbar';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
const Layout = () => (
  <>
    <Navbar />
    <Grid container>
      <Grid xs={2} item />
      <Grid xs={8} item>
        <Outlet />
      </Grid>
      <Grid xs={2} item />
    </Grid>
  </>
);

export default Layout;
