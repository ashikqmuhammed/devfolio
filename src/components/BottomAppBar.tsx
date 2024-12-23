"use client";

import React from 'react';
import AppBar from '@mui/material/AppBar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';

const BottomAppBar: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const { push } = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        push('/'); // Navigate to Home
        break;
      case 1:
        push('/projects'); // Navigate to Projects
        break;
      case 2:
        push('/contact'); // Navigate to Contact
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: 'calc(100% - 32px)',
        maxWidth: 600,
      }}
    >
      <Paper elevation={3} sx={{ borderRadius: '16px', overflow: 'hidden' }}>
        <AppBar position="static" >
          <BottomNavigation
            value={value}
            onChange={handleChange}
          
          >
            <BottomNavigationAction
              label="Home"
              icon={<Icon icon='mingcute:home-4-fill' width={24} height={24} />}
            />
            <BottomNavigationAction
              label="Projects"
              icon={<Icon icon='mingcute:code-fill' width={24} height={24} />}
            />
            <BottomNavigationAction
              label="Contact"
              icon={<Icon icon='mingcute:mail-fill' width={24} height={24} />}
            />
          </BottomNavigation>
        </AppBar>
      </Paper>
    </Box>
  );
};

export default BottomAppBar;
