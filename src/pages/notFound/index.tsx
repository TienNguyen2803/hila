
import { Box, Button, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      <Button 
        component={RouterLink} 
        to="/" 
        variant="contained" 
        color="primary"
        size="large"
      >
        Go to Homepage
      </Button>
    </Container>
  );
};

export default NotFound;
