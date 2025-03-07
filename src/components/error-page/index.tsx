import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function ErrorPage() {
  const { t } = useTranslation('notfound');

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 text-left">
      <h1>{t('oops')}</h1>
      <p>{t('title')}</p>
      <Button asChild>
        <Link to="/">{t('backtohomepage')}</Link>
      </Button>
    </div>
  );
}
