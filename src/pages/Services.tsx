
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/services-bg.jpg) no-repeat center center',
  backgroundSize: 'cover',
  padding: theme.spacing(10, 0),
  color: 'white',
  textAlign: 'center',
  marginBottom: theme.spacing(6),
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[10],
  },
}));

const Services = () => {
  const services = [
    {
      title: 'Swedish Massage',
      description: 'A gentle form of massage that uses long strokes, kneading, deep circular movements, vibration and tapping to help relax and energize you.',
      image: '/images/service-1.jpg',
      price: '$85',
    },
    {
      title: 'Deep Tissue Massage',
      description: 'A massage technique that focuses on the deeper layers of muscle tissue. It aims to release the chronic patterns of tension in the body.',
      image: '/images/service-2.jpg',
      price: '$95',
    },
    {
      title: 'Hot Stone Massage',
      description: 'A specialty massage where smooth, heated stones are placed on specific parts of your body to help relax and ease tense muscles.',
      image: '/images/service-3.jpg',
      price: '$110',
    },
    {
      title: 'Aromatherapy Massage',
      description: 'A massage therapy that uses essential oils from plants to engage your sense of smell and add additional healing effects.',
      image: '/images/service-4.jpg',
      price: '$100',
    },
    {
      title: 'Facial Treatment',
      description: 'A professional cleansing, exfoliation, and nourishment treatment for your face. Helps maintain healthy skin and address specific skin concerns.',
      image: '/images/service-5.jpg',
      price: '$120',
    },
    {
      title: 'Body Scrub & Wrap',
      description: 'An exfoliating treatment that removes dead skin cells, followed by a hydrating body wrap that helps detoxify and moisturize your skin.',
      image: '/images/service-6.jpg',
      price: '$130',
    },
  ];

  return (
    <>
      <HeroSection>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="h5">
            Premium Treatments for Mind, Body & Soul
          </Typography>
        </Container>
      </HeroSection>

      <Container sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard elevation={3}>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                    <Typography variant="h6" color="primary">
                      {service.price}
                    </Typography>
                    <Button variant="contained" color="primary">
                      Book Now
                    </Button>
                  </Box>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Services;
