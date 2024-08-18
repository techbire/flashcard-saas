'use client';

import { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme } from "./theme";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Toolbar, Typography, Box, Grid } from "@mui/material";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBackgroundImage('/light_mode.jpg');
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % 3); // 3 features
    }, 2000); // Change feature every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const renderFeature = () => {
    switch (currentFeatureIndex) {
      case 0:
        return (
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Easy Text Input
            </Typography>
            <Typography>
              Just paste your text and we will do the rest. Creating flashcards has never been easier.
            </Typography>
          </Grid>
        );
      case 1:
        return (
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Smart Flashcards
            </Typography>
            <Typography>
              Our AI will parse your text and create a set of concise flashcards, perfect for studying.
            </Typography>
          </Grid>
        );
      case 2:
        return (
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Accessible Anywhere
            </Typography>
            <Typography>
              Access your flashcards from any device, any time. Study on the go with ease.
            </Typography>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          padding: 2,
        }}
      >
        <Head>
          <title>Flashcards</title>
          <meta name="description" content="Create flashcards from your text" />
        </Head>

        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
            </Typography>
            <Button color="inherit" href="/generate">Create Flashcards</Button>
            <SignedOut>
              <Button color="inherit" href="/sign-in">Login</Button>
              <Button color="inherit" href="/sign-up">Sign Up</Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            textAlign: "center",
            my: 4,
          }}
        >
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold'}}>
          AI Flashcard Wizard
          </Typography>
          <Typography variant="h5" gutterBottom>
          Seamless Flashcard Creation at Your Fingertips
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              href="/generate"
            >
              Generate a set
            </Button>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              href="/flashcards"
            >
              View your sets
            </Button>
          </Box>
        </Box>





        <Box sx={{ my: 6, display: 'flex', justifyContent: 'center' }}>
  <Box
    sx={{
      backgroundColor: 'white',
      p: 4,
      boxShadow: 2,
      width: '100%',
      maxWidth: 1200, // Set a max-width to limit the box size on large screens
    }}
  >
    <Typography variant="h4" gutterBottom align="center" sx={{ mb: 2 }}>
      Features
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {renderFeature()}
    </Grid>
  </Box>
</Box>



        <Box sx={{ my: 6 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 2 }}>
            Pricing
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6} lg={4}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid",
                  borderColor: (theme) => theme.palette.divider,
                  borderRadius: 2,
                  backgroundColor: (theme) => theme.palette.background.paper,
                  color: (theme) => theme.palette.text.primary,
                  boxShadow: 1,
                  textAlign: "center",
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: (theme) => `0 4px 20px ${theme.palette.grey[500]}`,
                  },
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ mb: 1 }}>
                  Free
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
                  $0/Month
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ mb: 1 }}>
                  Basic version
                </Typography>
                <Typography variant="body1" paragraph>
                  Generate up to 1000 Flashcards per month
                </Typography>
                <Typography variant="body1" paragraph>
                  Basic flashcard features and limited storage
                </Typography>
                <Button variant="contained" href="/generate">
                  Try Free
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid",
                  borderColor: (theme) => theme.palette.divider,
                  borderRadius: 2,
                  backgroundColor: (theme) => theme.palette.background.paper,
                  color: (theme) => theme.palette.text.primary,
                  boxShadow: 1,
                  textAlign: "center",
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: (theme) => `0 4px 20px ${theme.palette.grey[500]}`,
                  },
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ mb: 1 }}>
                  Pro
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
                  $5/Month
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ mb: 1 }}>
                  Pro version
                </Typography>
                <Typography variant="body1" paragraph>
                  Generate up to 100K Flashcards per month
                </Typography>
                <Typography variant="body1" paragraph>
                  Unlimited storage and priority support
                </Typography>
                <Button variant="contained" href="/sign-up">
                  Coming Soon
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
  sx={{
    textAlign: 'center',
    p: 2,
    }}
>
  <Typography variant="body2">
    © 2024 Flashcard SaaS by techbire. All rights reserved.
  </Typography>
</Box>
      </Box>

      <Analytics />
    </ThemeProvider>
  );
}


