import { createTheme } from '@mui/material/styles'

// Airbnb Design Language System tokens
const theme = createTheme({
  palette: {
    primary: {
      main: '#D03660',
      light: '#D73B53',
      dark: '#222222',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#222222',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#222222',
      secondary: '#717171',
      disabled: '#AAAAAA',
    },
    error: {
      main: '#8F2A14',
    },
    divider: '#EBEBEB',
    action: {
      disabled: '#AAAAAA',
      disabledBackground: '#DDDDDD',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontSize: 32,
      lineHeight: '36px',
      fontWeight: 700,
      color: '#222222',
    },
    h2: {
      fontSize: 23,
      lineHeight: '28px',
      fontWeight: 600,
      color: '#222222',
    },
    h3: {
      fontSize: 16,
      lineHeight: '23px',
      fontWeight: 600,
      color: '#222222',
    },
    body1: {
      fontSize: 16,
      lineHeight: '23px',
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      lineHeight: '18px',
      fontWeight: 400,
    },
    caption: {
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: 400,
      color: '#717171',
    },
    button: {
      fontSize: 14,
      lineHeight: '18px',
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: '#717171',
    },
  },
  spacing: 8, // base-8 spacing system
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          padding: '12px 24px',
          transition: 'all 0.2s ease-in-out',
        },
        containedPrimary: {
          background: 'linear-gradient(90deg, #D03660 0%, #D73B53 100%)',
          color: '#FFFFFF',
          '&:hover': {
            background: 'linear-gradient(90deg, #D03660 0%, #D73B53 100%)',
            opacity: 0.9,
            transform: 'translateY(-1px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
          '&.Mui-disabled': {
            background: '#DDDDDD',
            color: '#AAAAAA',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid #EBEBEB',
          boxShadow: 'none',
          transition: 'box-shadow 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
          },
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
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid #EBEBEB',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease-in-out',
        },
      },
    },
  },
})

export default theme
