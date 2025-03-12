
import Banner from '@/components/Home/Banner';
import Introduction from '@/components/Home/Introduction';
import FeaturedServices from '@/components/Home/FeaturedServices';
import FeaturedProducts from '@/components/Home/FeaturedProducts';
import Testimonials from '@/components/Home/Testimonials';
import ConsultationForm from '@/components/Home/ConsultationForm';
import Footer from '@/components/Home/Footer';
import { Box } from '@mui/material';
import AppLayout from '@/layout/AppLayout';

const Home = () => {
  return (
    <AppLayout>
      <Box sx={{ minHeight: '100vh' }}>
        <Banner />
        <Introduction />
        <FeaturedServices />
        <FeaturedProducts />
        <Testimonials />
        <ConsultationForm />
        <Footer />
      </Box>
    </AppLayout>
  );
};

export default Home;
