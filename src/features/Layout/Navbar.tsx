import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import routeList from 'routes/routeList';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const pages = [
    { name: 'Inicio', path: routeList.HOME },
    { name: 'Acerca de', path: routeList.ABOUT },
    { name: 'Crear', path: routeList.CREATE },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            href={routeList.HOME}
            variant="h6"
            sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}
            component="a"
            noWrap
          >
            Dadapoems
          </Typography>
          <Grid xs={6} sx={{ mr: 5 }}>
            {pages.map(({ name, path }) => (
              <Typography
                variant="h6"
                sx={{
                  border: 'none',
                  backgroundColor: 'inherit',
                  flexGrow: 1,
                  color: 'inherit',
                  textDecoration: 'none',
                  ml: 3,
                }}
                component="button"
                onClick={() => navigate(path)}
                noWrap
              >
                {name}
              </Typography>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
