import React from 'react';

import { Grid, Box } from '@mui/material';

import { Container, Title } from './styles';

import Card from './Card';

const Board: React.FC = () => {
  return (
    <>
      <Container elevation={6}>
        <Grid
          sx={{ flexGrow: 1, flexDirection: { xs: 'column', md: 'row' } }}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            sx={{ flexGrow: 1, flexDirection: { xs: 'column', md: 'row' } }}
            alignContent="center"
            alignItems="center"
            justifyContent="center"
          >
            <Title variant="h1" fontSize={30} align="center" fontWeight={500}>
              AnyCubic
            </Title>
          </Grid>

          {Array.from(Array(24)).map((_, index) => (
            <Grid item xs={12} sm={4} md={2} key={index}>
              <Box m={1}>
                <Card>xs=2</Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Board;
