import { Grid, Typography } from '@mui/material';
import dada from '../../assets/dada-2.jpg';
import { useNavigate } from 'react-router-dom';
import routeList from 'routes/routeList';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Grid sx={{ mt: 5, position: 'relative' }} container>
      <img src={dada} alt="Dadaismo" className="home-img" />
      <Typography variant="h2" className="home-img-text">
        {' '}
        Dadaísmo en TypeScript{' '}
      </Typography>
      <Typography
        variant="h4"
        className="home-link-one"
        component="button"
        onClick={() => navigate(routeList.ABOUT)}
      >
        {' '}
        Acerca de este proyecto{' '}
      </Typography>
      <Typography
        variant="h4"
        className="home-link-two"
        component="button"
        onClick={() => navigate(routeList.CREATE)}
      >
        {' '}
        Crea un poema{' '}
      </Typography>
    </Grid>
  );
};
export default Home;
