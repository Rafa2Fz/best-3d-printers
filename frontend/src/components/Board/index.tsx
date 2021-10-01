import React from 'react';
import { Grid, Box } from '@mui/material';

import { Container } from './styles';

import Card from './Card';

const Board: React.FC = () => {
  return (
    <Container
      sx={{ flexGrow: 1, flexDirection: { xs: 'column', md: 'row' } }}
      container
      justifyContent="center"
      alignItems="center"
    >
      {Array.from(Array(24)).map((_, index) => (
        <Grid item xs={12} sm={4} md={2} key={index}>
          <Box m={1}>
            <Card>xs=2</Card>
          </Box>
        </Grid>
      ))}
    </Container>
  );
};

export default Board;
