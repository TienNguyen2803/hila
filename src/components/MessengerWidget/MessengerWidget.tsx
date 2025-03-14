
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
    background: 'linear-gradient(180deg, #00C6FF 0%, #0068FF 100%)',
    color: 'white',
    padding: theme.spacing(2),
    borderRadius: '50%',
    boxShadow: '0 2px 12px rgba(0,132,255,0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '0 4px 16px rgba(0,132,255,0.4)',
    },
  },
}));

const MessengerWidget: React.FC = () => {
  const handleClick = () => {
    window.open('https://m.me/tiennguyen280397', '_blank');
  };

  return (
    <WidgetContainer onClick={handleClick}>
      <Facebook className="messenger-icon" sx={{ fontSize: 40 }} />
    </WidgetContainer>
  );
};

export default MessengerWidget;
