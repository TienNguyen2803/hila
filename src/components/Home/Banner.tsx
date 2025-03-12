
import { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { BannerSlide } from '@/types';

// Sample data - in a real application, this would come from an API
const sampleSlides: BannerSlide[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Relax and Rejuvenate',
    description: 'Experience our premium spa treatments designed to refresh your body and mind.'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Summer Special Offer',
    description: 'Get 20% off on all massage treatments this summer.'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Luxury Spa Experience',
    description: 'Indulge in our luxury spa packages for a complete wellness experience.'
  }
];

const BannerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '70vh',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: '50vh',
  },
}));

const SlideContainer = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  transition: 'opacity 1s ease-in-out',
});

const SlideImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
}));

const SlideContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  textAlign: 'center',
  width: '80%',
  zIndex: 1,
}));

const NavigationButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  zIndex: 2,
}));

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = sampleSlides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [slidesCount]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };

  return (
    <BannerContainer>
      {sampleSlides.map((slide, index) => (
        <SlideContainer
          key={slide.id}
          sx={{
            opacity: index === currentSlide ? 1 : 0,
            zIndex: index === currentSlide ? 1 : 0,
          }}
        >
          <SlideImage
            sx={{
              backgroundImage: `url(${slide.imageUrl})`,
            }}
          />
          <SlideContent>
            <Typography variant="h3" component="h1" gutterBottom>
              {slide.title}
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
              {slide.description}
            </Typography>
            {slide.link && (
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
                href={slide.link}
              >
                Learn More
              </Button>
            )}
          </SlideContent>
        </SlideContainer>
      ))}
      <NavigationButton
        sx={{ left: 20 }}
        onClick={handlePrevSlide}
      >
        <NavigateBeforeIcon fontSize="large" />
      </NavigationButton>
      <NavigationButton
        sx={{ right: 20 }}
        onClick={handleNextSlide}
      >
        <NavigateNextIcon fontSize="large" />
      </NavigationButton>
    </BannerContainer>
  );
};

export default Banner;
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BannerSlide } from '../../types';

// Demo data - would come from your CMS in a real application
const slides: BannerSlide[] = [
  {
    id: '1',
    imageUrl: '/images/spa-banner-1.jpg',
    title: 'Luxury Spa Experience',
    description: 'Indulge yourself in our premium treatments',
    link: '/services'
  },
  {
    id: '2',
    imageUrl: '/images/spa-banner-2.jpg',
    title: 'Special Offers',
    description: 'Enjoy 20% off on all treatments this month',
    link: '/promotions'
  },
  {
    id: '3',
    imageUrl: '/images/spa-banner-3.jpg',
    title: 'Gift Certificates',
    description: 'The perfect gift for your loved ones',
    link: '/gift-cards'
  }
];

const BannerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '80vh',
  minHeight: 500,
  maxHeight: 800,
  overflow: 'hidden',
}));

const SlideContainer = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  transition: 'opacity 1s ease-in-out',
});

const SlideImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
}));

const SlideContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  textAlign: 'center',
  width: '80%',
  zIndex: 1,
}));

const NavigationButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  zIndex: 2,
}));

const IndicatorContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: '10px',
  zIndex: 2,
}));

const Indicator = styled(Box)<{ active: boolean }>(({ theme, active }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
}));

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <BannerContainer>
      {slides.map((slide, index) => (
        <SlideContainer
          key={slide.id}
          sx={{ 
            opacity: index === currentSlide ? 1 : 0,
            zIndex: index === currentSlide ? 1 : 0,
          }}
        >
          <SlideImage sx={{ backgroundImage: `url(${slide.imageUrl})` }} />
          <SlideContent>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 'bold',
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              {slide.title}
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4,
                textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
              }}
            >
              {slide.description}
            </Typography>
            {slide.link && (
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                href={slide.link}
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem'
                }}
              >
                Learn More
              </Button>
            )}
          </SlideContent>
        </SlideContainer>
      ))}

      <NavigationButton 
        sx={{ left: '20px' }}
        onClick={handlePrevSlide}
      >
        &#10094;
      </NavigationButton>
      <NavigationButton 
        sx={{ right: '20px' }}
        onClick={handleNextSlide}
      >
        &#10095;
      </NavigationButton>

      <IndicatorContainer>
        {slides.map((_, index) => (
          <Indicator 
            key={index} 
            active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </IndicatorContainer>
    </BannerContainer>
  );
};

export default Banner;
