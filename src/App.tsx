import './i18n';
import Layout from './components/layout/Layout';
import SetupWizard from './components/setup/SetupWizard';

function App() {
  return (
    <Layout>
      <main className='mx-auto p-4'>
        <SetupWizard />
      </main>
    </Layout>
  );
}

export default App;