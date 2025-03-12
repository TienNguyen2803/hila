
import React from 'react';
import Banner from '../components/Home/Banner';
import Introduction from '../components/Home/Introduction';
import FeaturedServices from '../components/Home/FeaturedServices';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import Testimonials from '../components/Home/Testimonials';
import ConsultationForm from '../components/Home/ConsultationForm';

const Home = () => {
  return (
    <>
      <Banner />
      <Introduction />
      <FeaturedServices />
      <FeaturedProducts />
      <Testimonials />
      <ConsultationForm />
    </>
  );
};

export default Home;
