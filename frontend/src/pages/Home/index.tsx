import React from 'react';

import Logo from '../../assets/3dlogo.png';

import Header from '../../components/Header';
import Board from '../../components/Board';

import { Grid, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import Link from '@mui/material/Link';

import { Link as RouterLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Box mt={7}>
        <Grid
          container
          sx={{ flexGrow: 1, flexDirection: { xs: 'column', md: 'row' } }}
        >
          <Grid item xs={false} md={4} sx={{ display: { xs: 'false' } }}>
            <Paper sx={{ width: '500px', height: '100px' }}>Bla</Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Board />
          </Grid>
        </Grid>
      </Box>
    </>
    // <Link component={RouterLink} to="/signup">
    //   // SignUp //{' '}
    // </Link>
  );
};

export default Home;
