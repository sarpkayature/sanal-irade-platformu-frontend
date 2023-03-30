import { VerticalHeader, LoginForm } from '../../components';
import { useTranslation } from '../../i18n';

export default async function Witness({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, ['witness']);

  const translations = {
    // @ts-ignore
    login: t('witness.login'),
    request: t('witness.request_form'),
  };

  return (
    <>
      <VerticalHeader loginType="witness" translations={translations}>
        <LoginForm />
      </VerticalHeader>
    </>
  );
}
