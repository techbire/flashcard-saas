'use client'

import { createTheme } from '@mui/material/styles';

// Define light theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Example primary color
    },
    background: {
      default: '#f5f5f5', // Background color for light mode
      paper: '#ffffff',   // Paper color for light mode
    },
    text: {
      primary: '#000000', // Primary text color for light mode
      secondary: '#333333', // Secondary text color for light mode
    },
  },
});

export { lightTheme };
