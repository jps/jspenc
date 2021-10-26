import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { BaseProvider, Header, Footer } from '@jspenc/ui/shared-ui';
import {
  Cell,
  Grid,
  Stack,
} from 'newskit';
import React from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>James Spencer</title>
      </Head>
      <BaseProvider>
        <Grid>
          <Cell
            xs={12}
            smOffset={1}
            sm={10}
            mdOffset={2}
            md={8}
            lgOffset={3}
            lg={6}
          >
            <Header/>
            <main>
              <Component {...pageProps} />
            </main>
            <Footer/>
          </Cell>
        </Grid>
      </BaseProvider>
    </>
  );
}

export default CustomApp;
