import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2d5a3d',
      light: '#3a7a52',
      dark: '#1e3d2a',
    },
    secondary: {
      main: '#8fac8f',
    },
    background: {
      default: '#faf6f1',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c2c2c',
      secondary: '#6b6358',
    },
    warning: {
      main: '#e8d98e',
      light: '#fef9e7',
    },
  },
  typography: {
    fontFamily: '"DM Sans", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
    },
    caption: {
      fontSize: '0.75rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 100,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
})

export default theme
