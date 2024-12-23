import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const ContactPage: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you’d like to get in touch, feel free to drop a message!
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 400,
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ alignSelf: 'flex-start' }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ContactPage;
