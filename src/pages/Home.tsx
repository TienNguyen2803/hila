import React from 'react';
import { Box, Container } from '@mui/material';
import Banner from '../components/Home/Banner';
import FeaturedServices from '../components/Home/FeaturedServices';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import Testimonials from '../components/Home/Testimonials';
import Introduction from '../components/Home/Introduction';
import ConsultationForm from '../components/Home/ConsultationForm';

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