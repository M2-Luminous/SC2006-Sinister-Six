import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Control/Theme';
import CssBaseline from '@mui/material/CssBaseline';

/**
 * @fileoverview This is the main entry point for the application.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <ThemeProvider theme={theme} >
      <CssBaseline />
      < App />
    </ThemeProvider>
  </React.Fragment>
);
