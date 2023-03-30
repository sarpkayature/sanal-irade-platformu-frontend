'use client';
import { useMemo } from 'react';
import Image from 'next/image';
import { Grid, Typography } from '@mui/material';

export function VerticalHeader({ loginType }: { loginType: string }) {
  const loginTypeMap = useMemo(() => {
    switch (loginType) {
      case 'witness':
        return 'Müşahit Girişi';
      case 'executive':
        return 'Yönetici Girişi';
      case 'witness-request':
        return 'Müşahit Talebi';
      default:
        return '';
    }
  }, [loginType]);

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Image src={'/assets/logos/sp_with_firm.png'} width={400} height={200} alt="logo" />
      </Grid>
      <Grid item>
        <Typography variant="h6" component="h3" sx={{ mt: 2, color: '#00000080' }}>
          İradeni Korumaya Hoşgeldin!
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2" component="h1" sx={{ mt: 2 }}>
          {loginTypeMap}
        </Typography>
      </Grid>
    </Grid>
  );
}
