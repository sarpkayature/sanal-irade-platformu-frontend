import { LoginForm, VerticalHeader } from '../../components';
import { useTranslation } from '../../i18n';

export default async function Executive({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, ['executive']);

  const translations = {
    login: t('executive.login'),
  };

  return (
    <>
      <VerticalHeader loginType="executive" translations={translations}>
        <LoginForm />
      </VerticalHeader>
    </>
  );
}
