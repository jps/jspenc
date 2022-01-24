import { AppProps } from 'next/app';
import Head from 'next/head';
import { BaseProvider, Header, Footer, GlobalStyles } from '@jspenc/ui/shared-ui';
import { Cell, Grid, styled } from 'newskit';
import React from 'react';

//TODO: would be nice if the system to support full height grids.
const FullHeightCell = styled(Cell)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const FooterContainer = styled.div`
  margin-top: auto;
`;

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>James Spencer</title>
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
};
export default CustomApp;
