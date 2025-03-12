
import { Box, Typography, Container, Avatar, Rating, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Testimonial } from '@/types';
import { useState, useEffect } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// Sample data - in a real application, this would come from an API
const sampleTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    comment: 'The aromatherapy massage was incredible! The therapist listened to my needs and customized the treatment perfectly. I left feeling completely relaxed and rejuvenated.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    comment: 'I've tried many spas, but this one stands out for its exceptional service and attention to detail. The facial treatment gave my skin an amazing glow!',
    rating: 5
  },
  {
    id: '3',
    name: 'Emma Wilson',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    comment: 'The hot stone therapy was perfect for relieving my back pain. The atmosphere was so tranquil, and the staff were incredibly professional. Will definitely return!',
    rating: 4
  },
  {
    id: '4',
    name: 'David Rodriguez',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    comment: 'My wife and I enjoyed the couples massage package. It was the perfect way to celebrate our anniversary. The private suite was beautiful and the experience was unforgettable.',
    rating: 5
  }
];

const TestimonialsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
  position: 'relative',
}));

const TestimonialCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  maxWidth: 700,
  margin: '0 auto',
  backgroundColor: theme.palette.background.paper,
  borderRadius: 16,
  boxShadow: '0 8px 40px rgba(0, 0, 0, 0.12)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
}));

const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  fontSize: 60,
  color: theme.palette.primary.light,
  opacity: 0.3,
  marginBottom: theme.spacing(2),
}));

const AvatarWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const NavigationButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  width: 40,
  height: 40,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 2,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsCount = sampleTestimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialsCount]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsCount) % testimonialsCount);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsCount);
  };

  return (
    <TestimonialsSection>
      <Container>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{ 
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 5
          }}
        >
          What Our Customers Say
        </Typography>
        
        <Box sx={{ position: 'relative', my: 4, height: 350 }}>
          {sampleTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                opacity: index === currentIndex ? 1 : 0,
                transform: index === currentIndex ? 'translateY(0)' : 'translateY(20px)',
                pointerEvents: index === currentIndex ? 'auto' : 'none',
              }}
            >
              <QuoteIcon />
              <AvatarWrapper>
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{ width: 80, height: 80, mb: 2, mx: 'auto' }}
                />
              </AvatarWrapper>
              <Typography variant="body1" color="text.secondary" paragraph>
                "{testimonial.comment}"
              </Typography>
              <Rating value={testimonial.rating} readOnly sx={{ mb: 1 }} />
              <Typography variant="h6" component="p">
                {testimonial.name}
              </Typography>
            </TestimonialCard>
          ))}
          
          <NavigationButton 
            sx={{ left: { xs: 10, md: -20 } }}
            onClick={handlePrevious}
          >
            <KeyboardArrowLeftIcon />
          </NavigationButton>
          
          <NavigationButton 
            sx={{ right: { xs: 10, md: -20 } }}
            onClick={handleNext}
          >
            <KeyboardArrowRightIcon />
          </NavigationButton>
        </Box>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
