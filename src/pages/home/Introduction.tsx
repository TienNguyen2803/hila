
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const IntroductionSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
  textAlign: 'center',
}));

const Introduction = () => {
  return (
    <IntroductionSection>
      <Container>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          Welcome to Our Luxury Spa
        </Typography>
        <Typography 
          variant="h6" 
          component="p" 
          color="text.secondary"
          sx={{ 
            maxWidth: 800, 
            margin: '0 auto',
            lineHeight: 1.8
          }}
        >
          Experience a sanctuary where tranquility meets luxury. Our spa offers a complete escape from the everyday, 
          with expert therapists, premium products, and bespoke treatments designed to rejuvenate your body and mind. 
          We are dedicated to providing a personalized wellness journey for each of our valued guests.
        </Typography>
      </Container>
    </IntroductionSection>
  );
};

export default Introduction;
