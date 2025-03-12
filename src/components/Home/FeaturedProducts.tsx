
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Container, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Product } from '@/types';
import { useNavigate } from 'react-router-dom';

// Sample data - in a real application, this would come from an API
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Relaxing Essential Oil',
    description: 'A blend of lavender, chamomile, and bergamot essential oils to promote relaxation.',
    imageUrl: 'https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 35.99,
    discountPrice: 29.99
  },
  {
    id: '2',
    name: 'Facial Mask Set',
    description: 'Set of 5 facial masks for different skin types and needs.',
    imageUrl: 'https://images.unsplash.com/photo-1570194065650-d99fb4de8b51?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 49.99
  },
  {
    id: '3',
    name: 'Moisturizing Body Lotion',
    description: 'Luxurious body lotion with shea butter and almond oil for deep hydration.',
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 24.99,
    discountPrice: 19.99
  },
  {
    id: '4',
    name: 'Bath Salts Collection',
    description: 'Collection of natural bath salts with different essential oils for a relaxing bath experience.',
    imageUrl: 'https://images.unsplash.com/photo-1607006483224-85ca10a9343d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 32.99
  }
];

const ProductsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
}));

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[10],
  },
}));

const CardImageMedia = styled(CardMedia)({
  paddingTop: '75%', // 4:3 aspect ratio
});

const PriceContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '16px',
});

const OriginalPrice = styled(Typography)(({ theme }) => ({
  textDecoration: 'line-through',
  color: theme.palette.text.secondary,
}));

const DiscountPrice = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  return (
    <ProductsSection>
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
          Our Featured Products
        </Typography>
        <Grid container spacing={4}>
          {sampleProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard>
                <Box sx={{ position: 'relative' }}>
                  <CardImageMedia
                    image={product.imageUrl}
                    title={product.name}
                  />
                  {product.discountPrice && (
                    <Chip 
                      label="SALE" 
                      color="error" 
                      size="small"
                      sx={{ 
                        position: 'absolute', 
                        top: 10, 
                        right: 10,
                        fontWeight: 'bold'
                      }}
                    />
                  )}
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h3">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {product.description}
                  </Typography>
                  <PriceContainer>
                    {product.discountPrice ? (
                      <>
                        <OriginalPrice variant="body1">${product.price}</OriginalPrice>
                        <DiscountPrice variant="h6">${product.discountPrice}</DiscountPrice>
                      </>
                    ) : (
                      <Typography variant="h6" color="primary">${product.price}</Typography>
                    )}
                  </PriceContainer>
                  <Button 
                    variant="outlined" 
                    color="primary"
                    fullWidth
                    onClick={() => handleProductClick(product.id)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            onClick={() => navigate('/products')}
          >
            View All Products
          </Button>
        </Box>
      </Container>
    </ProductsSection>
  );
};

export default FeaturedProducts;
