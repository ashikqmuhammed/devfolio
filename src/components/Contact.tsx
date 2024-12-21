// app/components/Contact.tsx
"use client";

import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Contact: React.FC = () => {
  return (
    <Box id="contact" sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Contact Me
        </Typography>
        <form>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
