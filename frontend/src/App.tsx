import React from 'react';
import theme from './themes';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SignUp />
      </ThemeProvider>
    </>
  );
}

export default App;
