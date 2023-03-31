'use client';

import {
  TextField,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormHelperText,
  OutlinedInput,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { witnessRequestFormSchema, witnessRequestFormType } from './constants';

export const WitnessRequestForm = ({
  translations,
}: {
  translations: { [key: string]: string };
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      district: '',
      identityNumber: '',
      birthDate: '',
    },
    resolver: yupResolver(witnessRequestFormSchema),
  });

  const onSubmit = (data: witnessRequestFormType) => console.log(data);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        mt: 4,
      }}
    >
      <Typography variant="h4" component="h1" color="black">
        {translations.title}
      </Typography>
      <Grid
        container
        component="form"
        direction="column"
        onSubmit={handleSubmit(onSubmit)}
        spacing={2}
      >
        <Grid item>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                size="medium"
                fullWidth
                label={translations.name}
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name?.message}
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
                  marginBottom: '8px',
                }}
              />
            )}
          />
          <Controller
            name="surname"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label={translations.surname}
                size="medium"
                fullWidth
                variant="outlined"
                error={!!errors.surname}
                helperText={errors.surname?.message}
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
                  marginBottom: '8px',
                }}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                size="medium"
                fullWidth
                label={translations.email}
                variant="outlined"
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
                  marginBottom: '8px',
                }}
              />
            )}
          />
          <Controller
            name="identityNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                size="medium"
                fullWidth
                label={translations.identityNumber}
                variant="outlined"
                error={!!errors.identityNumber}
                helperText={errors.identityNumber?.message}
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
                  marginBottom: '8px',
                }}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                size="medium"
                fullWidth
                label={translations.phone}
                variant="outlined"
                error={!!errors.phone}
                helperText={errors.phone?.message}
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
                  marginBottom: '8px',
                }}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <InputLabel id="city">{translations.city}</InputLabel>

                <Select
                  {...field}
                  fullWidth
                  label="City"
                  error={!!errors.city}
                  labelId="city"
                  input={<OutlinedInput label={translations.city} />}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </>
            )}
          />
          <Controller
            name="district"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <InputLabel id="district">{translations.district}</InputLabel>
                <Select
                  {...field}
                  fullWidth
                  labelId="district"
                  error={!!errors.district}
                  input={<OutlinedInput label={translations.district} />}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {errors.district?.message && (
                  <FormHelperText>{errors.district?.message}</FormHelperText>
                )}
              </>
            )}
          />
          <Controller
            name="address"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                size="medium"
                fullWidth
                label={translations.address}
                variant="outlined"
                error={!!errors.address}
                helperText={errors.address?.message}
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
                  marginBottom: '8px',
                }}
              />
            )}
          />
          <Controller
            name="birthDate"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                size="medium"
                fullWidth
                label={translations.birthDate}
                variant="outlined"
                error={!!errors.birthDate}
                helperText={errors.birthDate?.message}
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
                  marginBottom: '8px',
                }}
              />
            )}
          />
        </Grid>
        <Button type="submit" fullWidth color="secondary" disabled={!isValid}>
          {translations.submit}
        </Button>
      </Grid>
    </Box>
  );
};
