
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Facebook } from '@mui/icons-material';

const WidgetContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
  cursor: 'pointer',
  '& .messenger-icon': {
    backgroundColor: '#0084FF',
    color: 'white',
    padding: theme.spacing(2),
    borderRadius: '50%',
    boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));

const MessengerWidget: React.FC = () => {
  const handleClick = () => {
    // Replace 'YOUR_FACEBOOK_PAGE_USERNAME' with your actual Facebook page username
    window.open('https://m.me/YOUR_FACEBOOK_PAGE_USERNAME', '_blank');
  };

  return (
    <WidgetContainer onClick={handleClick}>
      <Facebook className="messenger-icon" sx={{ fontSize: 40 }} />
    </WidgetContainer>
  );
};

export default MessengerWidget;
