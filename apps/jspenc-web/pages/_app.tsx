import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { BaseProvider } from '@jspenc/ui/shared-ui';
import {
  Block,
  Cell,
  Grid,
  IconFilledGitHub,
  Stack,
  IconButton,
  IconFilledTwitter,
  Link,
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
            <header>
              <Stack flow="horizontal-center" stackDistribution="space-between">
                <Block><Link href="/">James Spencer</Link></Block>
                <Block>
                  <Stack flow="horizontal-center" spaceInline="space030">
                    <IconButton aria-label="github">
                      <IconFilledGitHub overrides={{ size: 'iconSize020' }} />
                    </IconButton>
                    <IconButton aria-label="twitter">
                      <IconFilledTwitter overrides={{ size: 'iconSize020' }} />
                    </IconButton>
                  </Stack>
                </Block>
              </Stack>
            </header>
            <main>
              <Component {...pageProps} />
            </main>
            <footer>
              <Stack flow="horizontal-center" stackDistribution="flex-end">
                James Spencer {new Date().getFullYear()} &copy;
              </Stack>
            </footer>
          </Cell>
        </Grid>
      </BaseProvider>
    </>
  );
}

export default CustomApp;
