import { useTranslation } from '../../../i18n';
import { HorizontalHeader, WitnessRequestForm } from '@/app/components';

export default async function WitnessRequest({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, ['witness-request']);

  const translations = {
    // @ts-ignore
    title: t('witness_informations'),
    name: t('name'),
    surname: t('surname'),
    email: t('email'),
    phone: t('phone'),
    address: t('address'),
    city: t('city'),
    district: t('district'),
    identityNumber: t('identityNumber'),
    birthDate: t('birthDate'),
    submit: t('submit'),
  };

  return (
    <>
      <HorizontalHeader>
        <WitnessRequestForm translations={translations} />
      </HorizontalHeader>
    </>
  );
}
