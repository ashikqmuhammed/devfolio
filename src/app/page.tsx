// app/page.tsx
import {
  Avatar,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import { Icon } from "@iconify/react";

export default function HomePage() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={4}
      p={4}
      minHeight="100vh"
    >
      {/* Profile Section */}
      <Avatar
        alt="Muhammed Ashik"
        src="" // Replace with your image path
        sx={{ width: { xs: 190, md: 128 }, height: { xs: 190, md: 128 } }}
      />
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Muhammed Ashik
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Full Stack Developer
      </Typography>

      {/* Social Media Icons */}
      <Stack direction="row" spacing={2}>
        <IconButton
          href="https://www.linkedin.com/in/ashikqmuhammed"
          target="_blank"
          aria-label="LinkedIn"
          color="primary"
        >
          <Icon icon="mingcute:linkedin-fill" width={50} height={50} />
        </IconButton>
        <IconButton
          href="https://github.com/ashikqmuhammed"
          target="_blank"
          aria-label="GitHub"
          color="primary"
        >
          <Icon icon="mingcute:github-fill" width={50} height={50} />
        </IconButton>
        <IconButton
          href="https://telegram.me/ashikqmuhammed"
          target="_blank"
          aria-label="Telegram"
          color="primary"
        >
          <Icon icon="mingcute:telegram-fill" width={50} height={50} />
        </IconButton>
      </Stack>
    </Stack>
  );
}
