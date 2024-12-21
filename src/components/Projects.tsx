// app/components/Projects.tsx
"use client";

import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from "@mui/material";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "E-commerce App",
    description: "A fully-featured e-commerce application with payment integration.",
    image: "/ecommerce.jpg",
    link: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Social Media App",
    description: "A social media platform for sharing posts and following users.",
    image: "/social-media.jpg",
    link: "https://github.com/yourusername/social-media",
  },
];

const Projects: React.FC = () => {
  return (
    <Box id="projects" sx={{ py: 8, backgroundColor: "#f4f4f4" }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h5">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <Button href={project.link} target="_blank" fullWidth>
                  View Project
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
