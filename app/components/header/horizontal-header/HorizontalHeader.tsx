'use client';

import Image from 'next/image';
import { Button, ButtonGroup, Container, Grid, Typography } from '@mui/material';

const buttonProps = [
  {
    href: '/witness',
    text: 'Müşahit Girişi',
  },
  {
    href: '/executive',
    text: 'Yönetici Girişi',
  },
  {
    href: '/witness/request',
    text: 'Müşahit Talebi',
  },
];

export function HorizontalHeader({
  isBtnGroupActive = false,
  content = 'CUMHURBAŞKANLIĞI VE MİLLETVEKİLLİĞİ SEÇİMİ 14 MAYIS 2023',
}: {
  isBtnGroupActive?: boolean;
  content?: string;
}) {
  return (
    <Container
      sx={{
        width: '100%',
        height: '220px',
        bgcolor: 'primary.main.light',
        color: 'white',
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <Grid item alignSelf="center">
          <Image src={'/assets/logos/sp_with_firm.png'} alt="Logo" width={275} height={150} />
        </Grid>
        <Typography variant="h6" component="h3" align="center" color="black" flexGrow={2}>
          {content}
        </Typography>
        {isBtnGroupActive ? (
          <Grid item flexGrow={1}>
            <ButtonGroup
              fullWidth
              size="small"
              orientation="vertical"
              variant="contained"
              color="secondary"
              aria-label="contained primary button group"
              sx={{ gap: '1px', borderRadius: '8px' }}
            >
              {buttonProps.map((item, index) => (
                <Button href={item.href} key={index}>
                  {item.text}
                </Button>
              ))}
            </ButtonGroup>
          </Grid>
        ) : null}
      </Grid>
    </Container>
  );
}
