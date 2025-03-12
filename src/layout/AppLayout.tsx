
import { ReactNode, useState } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  useMediaQuery, 
  Theme, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  ListItemButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink, Outlet } from 'react-router-dom';

interface AppLayoutProps {
  children: ReactNode;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  position: 'absolute',
  zIndex: theme.zIndex.drawer + 1,
}));

const LogoTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  letterSpacing: 1,
  color: 'white',
  textDecoration: 'none',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  margin: theme.spacing(0, 1),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const BookNowButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1, 3),
  marginLeft: theme.spacing(2),
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: 'white',
}));

const Main = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  minHeight: '100vh',
}));

const AppLayout = ({ children }: AppLayoutProps) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const mobileDrawer = (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer}
    >
      <Box sx={{ width: 250 }} role="presentation">
        <DrawerHeader>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            MENU
          </Typography>
          <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          {navigationItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton 
                component={RouterLink} 
                to={item.path}
                onClick={toggleDrawer}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton 
              component={RouterLink} 
              to="/booking"
              onClick={toggleDrawer}
              sx={{ 
                bgcolor: 'primary.main', 
                color: 'white',
                m: 2,
                borderRadius: 1,
                '&:hover': {
                  bgcolor: 'primary.dark',
                }
              }}
            >
              <ListItemText primary="Book Now" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <StyledAppBar>
        <Container>
          <Toolbar disableGutters>
            <LogoTypography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{ flexGrow: 1 }}
            >
              LUXURY SPA RETREAT
            </LogoTypography>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {navigationItems.map((item) => (
                  <NavButton 
                    key={item.name}
                    component={RouterLink}
                    to={item.path}
                  >
                    {item.name}
                  </NavButton>
                ))}
                <BookNowButton 
                  component={RouterLink}
                  to="/booking"
                >
                  Book Now
                </BookNowButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>
      {isMobile && mobileDrawer}
      
      <Box component="main" sx={{ flexGrow: 1, pt: 8, pb: 4 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
