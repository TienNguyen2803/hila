
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/about-bg.jpg) no-repeat center center',
  backgroundSize: 'cover',
  padding: theme.spacing(10, 0),
  color: 'white',
  textAlign: 'center',
  marginBottom: theme.spacing(6),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const About = () => {
  return (
    <>
      <HeroSection>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h5">
            Luxury Spa Retreat - Your Sanctuary for Relaxation
          </Typography>
        </Container>
      </HeroSection>

      <Container sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <Typography variant="h4" gutterBottom color="primary">
                Our Story
              </Typography>
              <Typography paragraph>
                Founded in 2010, Luxury Spa Retreat began with a simple mission: to create a sanctuary where people could escape the stresses of everyday life and rejuvenate their mind, body, and spirit.
              </Typography>
              <Typography paragraph>
                What started as a small spa with just three treatment rooms has grown into a premier wellness destination, known for exceptional service and results-driven treatments.
              </Typography>
              <Typography>
                Our commitment to quality, innovation, and customer satisfaction has made us a leader in the wellness industry.
              </Typography>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="img" src="/images/about-1.jpg" alt="Spa interior" sx={{ width: '100%', height: 'auto', borderRadius: 1 }} />
          </Grid>

          <Grid item xs={12} sx={{ mt: 6 }}>
            <Typography variant="h4" gutterBottom color="primary" textAlign="center">
              Our Values
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {['Excellence', 'Integrity', 'Innovation', 'Wellness'].map((value) => (
                <Grid item xs={12} sm={6} md={3} key={value}>
                  <StyledPaper elevation={2} sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" gutterBottom>
                      {value}
                    </Typography>
                    <Typography>
                      We are committed to the highest standards in everything we do.
                    </Typography>
                  </StyledPaper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
