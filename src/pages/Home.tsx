
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
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/hero-bg.jpg) no-repeat center center',
  backgroundSize: 'cover',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
}));

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const Home = () => {
  return (
    <>
      <HeroSection>
        <Container>
          <Box sx={{ maxWidth: { xs: '100%', md: '60%' } }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Luxury Spa & Wellness Retreat
            </Typography>
            <Typography variant="h5" paragraph>
              Discover a sanctuary of relaxation and rejuvenation in the heart of the city.
            </Typography>
            <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
              Book Now
            </Button>
            <Button variant="outlined" color="inherit">
              Learn More
            </Button>
          </Box>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <Typography variant="h3" textAlign="center" gutterBottom>
            Welcome to Our Spa
          </Typography>
          <Typography variant="subtitle1" textAlign="center" paragraph sx={{ mb: 6 }}>
            Experience the ultimate in luxury spa treatments and services
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box textAlign="center" sx={{ p: 2 }}>
                <Box component="img" src="/images/icon-massage.png" alt="Massage Icon" sx={{ height: 80, mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Expert Massage
                </Typography>
                <Typography>
                  Our highly trained massage therapists provide a range of treatments to help you relax and rejuvenate.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign="center" sx={{ p: 2 }}>
                <Box component="img" src="/images/icon-facial.png" alt="Facial Icon" sx={{ height: 80, mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Luxurious Facials
                </Typography>
                <Typography>
                  Using only premium products, our facials will leave your skin glowing and renewed.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign="center" sx={{ p: 2 }}>
                <Box component="img" src="/images/icon-wellness.png" alt="Wellness Icon" sx={{ height: 80, mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Wellness Packages
                </Typography>
                <Typography>
                  Comprehensive packages designed to restore balance to your mind, body, and spirit.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default Home;
