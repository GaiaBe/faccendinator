import './i18n';
import { useTranslation } from 'react-i18next';
import Layout from './components/layout/Layout';
import UserForm from './components/setup/UserForm';

function App() {
  const { t } = useTranslation();
  return (
    <Layout>
      <main className='mx-auto p-4'>
        <UserForm />
        <p className="text-slate-600 px-4">
          {t('setup.title')}
        </p>
      </main>
    </Layout>
  );
}

export default App;