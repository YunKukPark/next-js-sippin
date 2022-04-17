import { AppProps } from 'next/dist/shared/lib/router/router';
import Layout from '../components/Layout';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
