import {
  getColorCssFromTheme,
  ThemeProvider,
  UncompiledTheme,
  Global,
} from 'newskit';
import { createContext, useState } from 'react';
import { JspencThemeLight } from '../theme/theme';

/* eslint-disable-next-line */
export interface BaseProviderProps {
  children: React.ReactNode;
}

export type SiteThemeContext = {
  theme: UncompiledTheme;
  setTheme: (theme: UncompiledTheme) => void;
};

export const SiteThemeContext = createContext<SiteThemeContext>({
  theme: JspencThemeLight,
  setTheme: () => {
    console.log('I got called');
  },
});

export const BaseProvider = ({ children }: BaseProviderProps) => {
  const [theme, setTheme] = useState<UncompiledTheme>(JspencThemeLight);
  return (
    <SiteThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <Global
          styles={`
          body{
            margin:0;
            height: 100%;            
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
        `}
        />
        {children}
      </ThemeProvider>
    </SiteThemeContext.Provider>
  );
};
