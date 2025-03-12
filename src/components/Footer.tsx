
import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: 'white',
  padding: theme.spacing(6, 0),
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(3),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  display: 'block',
  marginBottom: theme.spacing(1),
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(2),
  '& > svg': {
    marginRight: theme.spacing(2),
    marginTop: '3px',
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FooterTitle variant="h6">About Luxury Spa</FooterTitle>
            <Typography paragraph>
              Our luxury spa offers premium services designed to relax, rejuvenate, and refresh your body and mind. 
              With state-of-the-art facilities and expert staff, we provide a tranquil escape from the stresses of everyday life.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <SocialIconButton aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noopener">
                <FacebookIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noopener">
                <InstagramIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noopener">
                <TwitterIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="Pinterest" href="https://pinterest.com" target="_blank" rel="noopener">
                <PinterestIcon />
              </SocialIconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <FooterTitle variant="h6">Contact Information</FooterTitle>
            <InfoItem>
              <LocationOnIcon />
              <Typography>
                123 Relaxation Avenue<br />
                New York, NY 10001
              </Typography>
            </InfoItem>
            
            <InfoItem>
              <PhoneIcon />
              <Typography>
                (555) 123-4567
              </Typography>
            </InfoItem>
            
            <InfoItem>
              <EmailIcon />
              <Typography>
                info@luxuryspa.com
              </Typography>
            </InfoItem>
            
            <InfoItem>
              <AccessTimeIcon />
              <Typography>
                Monday - Friday: 9:00 AM - 8:00 PM<br />
                Saturday - Sunday: 10:00 AM - 6:00 PM
              </Typography>
            </InfoItem>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <FooterTitle variant="h6">Our Location</FooterTitle>
            <Box sx={{ height: '250px', width: '100%' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266568088!2d-73.98544448459473!3d40.74881797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU1LjgiTiA3M8KwNTknMDMuOCJX!5e0!3m2!1sen!2sus!4v1625152491068!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                title="Google Maps"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 6, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Luxury Spa. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
