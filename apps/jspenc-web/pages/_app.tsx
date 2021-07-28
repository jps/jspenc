import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { BaseProvider} from '@jspenc/ui/shared-ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to jspenc-web!</title>
      </Head>
      <BaseProvider>
      <div className="app">
        <header className="flex">
          <h1>Welcome to jspenc-web!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
      </BaseProvider>
    </>
  );
}

export default CustomApp;
