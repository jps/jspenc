import { Global } from '@emotion/react';
import { ThemeProvider } from 'newskit';
import { JspencTheme } from '../theme/theme';

/* eslint-disable-next-line */
export interface BaseProviderProps {
  children: React.ReactNode
}

export const BaseProvider = ({children}: BaseProviderProps) =>  
    <ThemeProvider theme={JspencTheme}>
      <Global styles={`
        body{
          margin:0; 
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
    </ThemeProvider>;
