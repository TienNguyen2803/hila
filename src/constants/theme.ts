import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    darkGrey: string;
    background: string;
    lightGrey: string;
  }
}

export const theme = extendTheme({
  typography: {
    allVariants: {
      fontFamily: 'sans-serif',
      textTransform: 'none',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '17px',
    },
    button: {
      textTransform: 'none',
    },
  },
  colorSchemes: {
    light: {
      palette: {
        common: {
          black: '#000',
          white: '#fff',
          lightGrey: '#474747',
          darkGrey: '#555',
          background: '#f5f6fe',
        },
        primary: {
          main: '#4285F4',
        },
        secondary: {
          main: '#27C59A',
        },
      },
    },
  },
});

export type Theme = typeof theme;
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#5C6BC0',
          light: '#8E99F3',
          dark: '#26418F',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#26A69A',
          light: '#64D8CB',
          dark: '#00766C',
          contrastText: '#FFFFFF',
        },
        background: {
          default: '#F5F5F5',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#333333',
          secondary: '#666666',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});
