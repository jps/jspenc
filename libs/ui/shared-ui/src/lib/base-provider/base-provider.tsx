import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeProvider,newskitLightTheme, Button } from 'newskit';

/* eslint-disable-next-line */
export interface BaseProviderProps {
  children: React.ReactNode
}

export function BaseProvider({children}: BaseProviderProps) {
  return (
    <ThemeProvider theme={newskitLightTheme}>
      <Global styles={`
        html {
          scroll-behavior: smooth;
        }

        //TODO: Remove
        h1,h2,h3,h4,h5{
          font-family: 'Raleway', 'sans-serif';
          font-weight: 300;
        }
        p,a{
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: 'DM Sans';
          src: url('/fonts/dmsans-regular.woff2')
              format('woff2');
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }
        @font-face {
          font-family: 'DM Sans';
          src: url('/fonts/dmsans-italic.woff2')
              format('woff2');
          font-style: italic;
          font-weight: 400;
          font-display: swap;
        }
        @font-face {
          font-family: 'DM Sans';
          src: url('/fonts/dmsans-bold.woff2')
              format('woff2');
          font-style: normal;
          font-weight: 700;
          font-display: swap;
        }
        @font-face {
          font-family: 'DM Sans';
          src: url('/fonts/dmsans-bolditalic.woff2')
              format('woff2');
          font-style: italic;
          font-weight: 700;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Raleway';
          src: url('/fonts/raleway-light.woff2')
              format('woff2');
          font-style: normal;
          font-weight: 300;
          font-display: swap;
        }
        @font-face {
          font-family: 'Raleway';
          src: url('/fonts/raleway-lightItalic.woff2')
              format('woff2');
          font-style: italic;
          font-weight: 300;
          font-display: swap;
        }
        @font-face {
          font-family: 'Raleway';
          src: url('/fonts/raleway-semibold.woff2')
              format('woff2');
          font-style: normal;
          font-weight: 600;
          font-display: swap;
        }
        @font-face {
          font-family: 'Raleway';
          src: url('/fonts/raleway-semibolditalic.woff2')
              format('woff2');
          font-style: italic;
          font-weight: 600;
          font-display: swap;
        }
      `} />

      {children}
    </ThemeProvider>
  );
}

export default BaseProvider;
