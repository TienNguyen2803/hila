import React, { useState, ReactNode } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink, Outlet } from 'react-router-dom';

interface AppLayoutProps {
  children?: ReactNode;
}

const pages = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Services', path: '/services' },
  { title: 'Contact', path: '/contact' },
];

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: 'inherit',
  textDecoration: 'none',
}));

const AppLayout: React.FC<AppLayoutProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:900px)');

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const mobileDrawer = (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={handleMobileMenuToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        '& .MuiDrawer-paper': {
          width: '100%',
          maxWidth: 300,
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={handleMobileMenuToggle} size="large">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {pages.map((page) => (
          <ListItem
            key={page.title}
            component={RouterLink}
            to={page.path}
            onClick={handleMobileMenuToggle}
            sx={{ color: 'inherit', textDecoration: 'none' }}
          >
            <ListItemText primary={page.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
  }));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <StyledAppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Logo
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              Luxury Spa
            </Logo>

            {/* Mobile menu */}
            {isMobile ? (
              <>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <Logo
                    variant="h6"
                    component={RouterLink}
                    to="/"
                    sx={{ flexGrow: 1 }}
                  >
                    Luxury Spa
                  </Logo>
                </Box>
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMobileMenuToggle}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              // Desktop menu
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                {pages.map((page) => (
                  <Button
                    key={page.title}
                    component={RouterLink}
                    to={page.path}
                    sx={{ my: 2, color: 'inherit', display: 'block', mx: 1 }}
                  >
                    {page.title}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>
      {isMobile && mobileMenuOpen && mobileDrawer}

      <Box component="main" sx={{ flexGrow: 1, pt: 10, pb: 4 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
import Footer from '../components/Footer';

// Add this right before the closing </Box> tag in the return statement
<Footer />
