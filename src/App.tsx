import './i18n';
import { useTranslation } from 'react-i18next';
import Layout from './components/layout/Layout';
import UserForm from './components/setup/UserForm';
import SetupStepper from './components/setup/SetupStepper';

function App() {
  const { t } = useTranslation();
  return (
    <Layout>
      <main className='mx-auto p-4'>
        <SetupStepper />
        <UserForm />
      </main>
    </Layout>
  );
}

export default App;