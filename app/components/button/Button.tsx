'use client';
import { Button, ButtonProps } from '@mui/material';

export function DButton({ content, props }: { content: string; props?: ButtonProps }) {
  return (
    <Button
      {...props}
      sx={{
        backgroundColor: 'secondary.main',
        color: 'primary.main',
        borderRadius: '12px',
      }}
    >
      {content}
    </Button>
  );
}
