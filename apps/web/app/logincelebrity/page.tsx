'use client';
import { Box } from '@mui/material';
import { LoginCelebrity, Appbar } from '@fanclip/ui';

export default function Page() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#19181B',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Appbar variant="primary" />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <LoginCelebrity />
      </Box>
    </Box>
  );
}
