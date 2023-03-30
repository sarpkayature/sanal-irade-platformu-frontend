'use client';
import { useState, MouseEvent } from 'react';
import { TextField, Box, Button, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

const schema = object().shape({
  email: string().email().required('Email Zorunlu Alandır'),
  password: string().required('Şifre Zorunlu Alandır'),
});

type LoginFormProps = {
  email: string;
  password: string;
};

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormProps) => console.log(data);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      mt={3}
      sx={{
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            fullWidth
            {...field}
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'black',
                },
                '&:hover fieldset': {
                  borderColor: 'black',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'black',
                },
              },
              '& .MuiInputLabel-root	': {
                '&.Mui-focused': {
                  color: 'black',
                },
                '& .MuiInputLabel-outlined': {
                  color: 'black',
                },
              },
            }}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            fullWidth
            {...field}
            label="Password"
            error={!!errors.password}
            helperText={errors.password?.message}
            type={showPassword ? 'text' : 'password'}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'black',
                },
                '&:hover fieldset': {
                  borderColor: 'black',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'black',
                },
              },
              '& .MuiInputLabel-root	': {
                '&.Mui-focused': {
                  color: 'black',
                },
                '& .MuiInputLabel-outlined': {
                  color: 'black',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {!showPassword ? (
                      <VisibilityOff sx={{ color: 'black' }} />
                    ) : (
                      <Visibility sx={{ color: 'black' }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      <Button type="submit" fullWidth color="secondary" disabled={!isValid}>
        Devam Et
      </Button>
    </Box>
  );
}
