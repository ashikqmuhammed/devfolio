// app/components/About.tsx
"use client";

import { Container, Typography, Grid, Avatar, Box } from "@mui/material";

const About: React.FC = () => {
  return (
    <Box id="about" sx={{ py: 8, backgroundColor: "#fff" }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          About Me
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Avatar
              alt="Your Name"
              src="/profile.jpg"
              sx={{ width: 200, height: 200, margin: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
              I am a passionate full stack developer with experience in
              building scalable web applications using technologies like
              React, Node.js, and TypeScript. I focus on delivering robust and
              efficient solutions.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
