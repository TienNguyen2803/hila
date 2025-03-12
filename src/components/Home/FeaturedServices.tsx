import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Service } from '@/types';
import { useNavigate } from 'react-router-dom';

// Sample data - in a real application, this would come from an API
const sampleServices: Service[] = [
  {
    id: '1',
    title: 'Aromatherapy Massage',
    description: 'A gentle massage using essential oils to promote relaxation and balance.',
    imageUrl: 'https://images.unsplash.com/photo-1544161497-6095fb868d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 120
  },
  {
    id: '2',
    title: 'Hot Stone Therapy',
    description: 'Smooth, heated stones are placed on specific parts of your body to help relax and ease tense muscles.',
    imageUrl: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 150
  },
  {
    id: '3',
    title: 'Facial Treatment',
    description: 'Customized facial treatments to cleanse, exfoliate, and nourish the skin.',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 100
  }
];

const ServicesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  }
}));

const CardImageMedia = styled(CardMedia)({
  paddingTop: '56.25%', // 16:9 aspect ratio
});

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
}));

const ServiceCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%', // 16:9
});

const ServiceCardContent = styled(CardContent)({
  flexGrow: 1,
});

const FeaturedServices = () => {
  const navigate = useNavigate();

  const handleServiceClick = (id: string) => {
    navigate(`/services/${id}`);
  };

  return (
    <SectionContainer>
      <Container>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{ 
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 6
          }}
        >
          Our Featured Services
        </Typography>

        <Grid container spacing={4}>
          {sampleServices.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <ServiceCard>
                <ServiceCardMedia
                  image={service.imageUrl}
                  title={service.title}
                />
                <ServiceCardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  {service.price && (
                    <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                      ${service.price}
                    </Typography>
                  )}
                  <Button 
                    variant="outlined" 
                    color="primary"
                    onClick={() => handleServiceClick(service.id)}
                    fullWidth
                  >
                    Learn More
                  </Button>
                </ServiceCardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/services')}
          >
            View All Services
          </Button>
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default FeaturedServices;