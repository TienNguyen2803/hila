import React from 'react';
import { Box } from '@mui/material';
import Banner from './Banner';
import FeaturedServices from './FeaturedServices';
import FeaturedProducts from './FeaturedProducts';
import Testimonials from './Testimonials';
import Introduction from './Introduction';
import ConsultationForm from './ConsultationForm';

const Home: React.FC = () => {
  return (
    <Box>
      <Banner />
      <Introduction />
      <FeaturedServices />
      <FeaturedProducts />
      <Testimonials />
      <ConsultationForm />
    </Box>
  );
};

export default Home;