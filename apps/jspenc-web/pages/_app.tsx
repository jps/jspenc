import { AppProps } from 'next/app';
import Head from 'next/head';
import {
  BaseProvider,
  Header,
  Footer,
  GlobalStyles,
} from '@jspenc/ui/shared-ui';
import styles from './app.module.css';

const Favicon = () => (
  <>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </>
);

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>James Spencer</title>
      <Favicon />
    </Head>
    <BaseProvider>
      <GlobalStyles />
      <div className={styles.grid}>
        <div className={styles.fullHeightCell}>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <div className={styles.footerContainer}>
            <Footer />
          </div>
        </div>
      </div>
    </BaseProvider>
  </>
);
export default CustomApp;
