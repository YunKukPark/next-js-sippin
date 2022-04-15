import { AppProps } from 'next/dist/shared/lib/router/router';
import Navbar from '../components/Navbar';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <style jsx global>
        {`
          nav {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: #444;
          }

          .active {
            color: #ff4747;
          }
        `}
      </style>
    </>
  );
}

export default App;
