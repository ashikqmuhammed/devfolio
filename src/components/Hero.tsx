// app/components/Hero.tsx
"use client";

import { Container, Typography, Button, Box } from "@mui/material";

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <Container>
        <Typography variant="h1">Hi, I'm Your Name</Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Full Stack Developer specializing in React, Node.js, and TypeScript.
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
          View My Work
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
