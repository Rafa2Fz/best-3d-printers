import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    text: {
      primary: '#333333',
    },
    background: {
      default: '#fff',
      paper: '#ffffff',
    },

    primary: {
      main: '#0e62c9',
      contrastText: '#fff',
    },
    secondary: {
      main: '#03DAC6',
      contrastText: '#fff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '::-ms-reveal': {
          display: 'none',
        },
      },
    },
    MuiLink: {
      styleOverrides: {},
    },
  },
});

export default theme;
