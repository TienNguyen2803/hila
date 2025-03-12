
import { Box, Container, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/contact-bg.jpg) no-repeat center center',
  backgroundSize: 'cover',
  padding: theme.spacing(10, 0),
  color: 'white',
  textAlign: 'center',
  marginBottom: theme.spacing(6),
}));

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(2),
  '& > svg': {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
}));

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <>
      <HeroSection>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h5">
            We're Here to Help with Any Questions
          </Typography>
        </Container>
      </HeroSection>

      <Container sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ContactCard elevation={3}>
              <Typography variant="h4" gutterBottom color="primary">
                Get in Touch
              </Typography>
              <Typography paragraph>
                We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
              </Typography>

              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="phone"
                      label="Phone Number"
                      name="phone"
                      autoComplete="tel"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="message"
                      label="Message"
                      id="message"
                      multiline
                      rows={4}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send Message
                </Button>
              </Box>
            </ContactCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <ContactCard elevation={3}>
              <Typography variant="h4" gutterBottom color="primary">
                Contact Information
              </Typography>
              
              <Box sx={{ mt: 2 }}>
                <InfoItem>
                  <LocationOnIcon fontSize="large" />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Address
                    </Typography>
                    <Typography>
                      123 Relaxation Avenue, New York, NY 10001
                    </Typography>
                  </Box>
                </InfoItem>

                <InfoItem>
                  <PhoneIcon fontSize="large" />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Phone
                    </Typography>
                    <Typography>
                      (555) 123-4567
                    </Typography>
                  </Box>
                </InfoItem>

                <InfoItem>
                  <EmailIcon fontSize="large" />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Email
                    </Typography>
                    <Typography>
                      info@luxuryspa.com
                    </Typography>
                  </Box>
                </InfoItem>

                <InfoItem>
                  <AccessTimeIcon fontSize="large" />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Hours
                    </Typography>
                    <Typography>
                      Monday - Friday: 9:00 AM - 8:00 PM<br />
                      Saturday - Sunday: 10:00 AM - 6:00 PM
                    </Typography>
                  </Box>
                </InfoItem>
              </Box>

              <Box sx={{ mt: 4 }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266568088!2d-73.98544448459473!3d40.74881797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU1LjgiTiA3M8KwNTknMDMuOCJX!5e0!3m2!1sen!2sus!4v1625152491068!5m2!1sen!2sus" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  title="Google Maps"
                ></iframe>
              </Box>
            </ContactCard>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
import React from 'react';
import { Box, Typography, Container, TextField, Button, Grid } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          Have questions or want to book an appointment? Get in touch with us.
        </Typography>
      </Box>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField fullWidth label="Name" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Email" variant="outlined" type="email" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" size="large">
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
