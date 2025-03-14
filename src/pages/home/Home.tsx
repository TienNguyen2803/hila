import React from 'react';
import { Box } from '@mui/material';
import Banner from './Banner';
import FeaturedServices from './FeaturedServices';
import FeaturedProducts from './FeaturedProducts';
import Testimonials from './Testimonials';
import Introduction from './Introduction';
import ConsultationForm from './ConsultationForm';
import MessengerWidget from '../../components/MessengerWidget/MessengerWidget';

const Home: React.FC = () => {
  return (
    <Box>
      <Banner />
      <Introduction />
      <FeaturedServices />
      <FeaturedProducts />
      <Testimonials />
      <ConsultationForm />
      <MessengerWidget />
    </Box>
  );
};

export default Home;