
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Luxury Spa Retreat
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Experience the ultimate in relaxation and rejuvenation
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
