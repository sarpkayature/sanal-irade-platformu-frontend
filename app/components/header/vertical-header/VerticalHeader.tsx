'use client';
import { useMemo, useCallback, ReactNode } from 'react';
import Image from 'next/image';
import { Grid, Typography } from '@mui/material';

export function VerticalHeader({
  loginType,
  children,
  translations,
}: {
  loginType: string;
  children?: ReactNode;
  translations: { [key: string]: string };
}) {
  const loginTypeMap = useMemo(() => {
    switch (loginType) {
      case 'witness':
        return translations['login'];
      case 'executive':
        return translations['login'];
      case 'witness-request':
        return translations['request'];
      default:
        return '';
    }
  }, [loginType, translations]);

  const clickImageHandler = useCallback(() => {
    window.location.href = '/';
  }, []);

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item sx={{ cursor: 'pointer' }}>
        <Image
          src={'/assets/logos/sp_with_firm.png'}
          width={400}
          height={200}
          alt="logo"
          onClick={clickImageHandler}
          priority
        />
      </Grid>
      <Grid item>
        <Typography variant="h6" component="h3" sx={{ mt: 2, color: '#00000080' }}></Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2" component="h1" sx={{ mt: 2 }}>
          {loginTypeMap}
        </Typography>
      </Grid>
      {children ? <Grid item>{children}</Grid> : null}
    </Grid>
  );
}
