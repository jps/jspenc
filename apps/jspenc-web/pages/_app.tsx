import { AppProps } from 'next/app';
import Head from 'next/head';
import {
  BaseProvider,
  Header,
  Footer,
  GlobalStyles,
} from '@jspenc/ui/shared-ui';
import { Cell, Grid, styled } from 'newskit';
import React from 'react';

//TODO: would be nice if the system could support full height grids.
const FullHeightCell = styled(Cell)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const FooterContainer = styled.div`
  margin-top: auto;
`;

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
      <Grid>
        <FullHeightCell
          xs={12}
          smOffset={1}
          sm={10}
          mdOffset={2}
          md={8}
          lgOffset={3}
          lg={6}
        >
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </FullHeightCell>
      </Grid>
    </BaseProvider>
  </>
);
export default CustomApp;
