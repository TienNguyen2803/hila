
import { Box, Typography, Container, Grid, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#1c2331' : '#121212',
  color: 'white',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(4),
}));

const LogoTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  marginBottom: theme.spacing(2),
}));

const FooterLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const IconText = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& > svg': {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const MapContainer = styled(Box)(({ theme }) => ({
  height: 200,
  width: '100%',
  border: 'none',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          {/* Logo and About */}
          <Grid item xs={12} md={4}>
            <LogoTypography variant="h6">
              LUXURY SPA RETREAT
            </LogoTypography>
            <Typography variant="body2" paragraph>
              Your sanctuary for relaxation and rejuvenation. We offer premium spa services and products to help you look and feel your best.
            </Typography>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <SocialIconButton aria-label="facebook">
                <FacebookIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="instagram">
                <InstagramIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="twitter">
                <TwitterIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="linkedin">
                <LinkedInIcon />
              </SocialIconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/products">Products</FooterLink>
              <FooterLink href="/booking">Book an Appointment</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <IconText>
              <LocationOnIcon />
              <Typography variant="body2">
                123 Relaxation Blvd, Serenity City, SC 12345
              </Typography>
            </IconText>
            <IconText>
              <PhoneIcon />
              <Typography variant="body2">
                <FooterLink href="tel:+11234567890">(123) 456-7890</FooterLink>
              </Typography>
            </IconText>
            <IconText>
              <EmailIcon />
              <Typography variant="body2">
                <FooterLink href="mailto:info@luxuryspa.com">info@luxuryspa.com</FooterLink>
              </Typography>
            </IconText>
            <IconText>
              <AccessTimeIcon />
              <Typography variant="body2">
                Mon-Sat: 9AM - 8PM<br />
                Sunday: 10AM - 6PM
              </Typography>
            </IconText>
          </Grid>

          {/* Google Maps */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Find Us
            </Typography>
            <MapContainer>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266568088!2d-73.98544448459473!3d40.74881797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU1LjgiTiA3M8KwNTknMDMuOCJX!5e0!3m2!1sen!2sus!4v1625152491068!5m2!1sen!2sus" 
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                loading="lazy" 
                title="Google Maps"
              ></iframe>
            </MapContainer>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
          mt: 4, 
          pt: 2,
          textAlign: 'center'
        }}>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.6)">
            &copy; {new Date().getFullYear()} Luxury Spa Retreat. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
