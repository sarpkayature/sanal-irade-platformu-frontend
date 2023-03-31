import { object, string } from 'yup';

export type witnessRequestFormType = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  address: string;
  identityNumber: string;
  birthDate: string;
  city: string;
  district: string;
};

export const witnessRequestFormSchema = object().shape({
  name: string().required('Isim Zorunlu Alandır'),
  surname: string().required('Soyisim Zorunlu Alandır'),
  email: string().email().required('Email Zorunlu Alandır'),
  phone: string().required('Telefon Zorunlu Alandır'),
  address: string().required('Adres Zorunlu Alandır'),
  city: string().required('Şehir Zorunlu Alandır'),
  district: string().required('İlçe Zorunlu Alandır'),
  identityNumber: string().required('T.C. Kimlik Numarası Zorunlu Alandır'),
  birthDate: string().required('Doğum Tarihi Zorunlu Alandır'),
});

