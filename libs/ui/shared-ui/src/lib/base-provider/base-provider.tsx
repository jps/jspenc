import { ThemeProvider, UncompiledTheme, Global, useTheme } from 'newskit';
import { createContext, useContext, useEffect, useState } from 'react';
import { JspencThemeDark, JspencThemeLight } from '../theme/theme';

/* eslint-disable-next-line */
export interface BaseProviderProps {
  children: React.ReactNode;
}

export type SiteThemeContext = {
  currentTheme: UncompiledTheme;
  toggleTheme: () => void;
};

export const SiteThemeContext = createContext<SiteThemeContext>({
  currentTheme: JspencThemeLight,
  toggleTheme: () => {
    console.error('undefined, I should never be executed');
  },
});

type SiteThemeProviderProps = {
  children: React.ReactNode;
};

export const SiteThemeProvider = ({ children }: SiteThemeProviderProps) => {
  const themes = new Map([
    [JspencThemeLight.name, JspencThemeLight],
    [JspencThemeDark.name, JspencThemeDark],
  ]);
  const [currentTheme, setCurrentTheme] =
    useState<UncompiledTheme>(JspencThemeLight);
  const isLightTheme = currentTheme.name === JspencThemeLight.name;

  const setTheme = (theme: UncompiledTheme) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme.name);
  };

  const toggleTheme = () => {
    if (isLightTheme) {
      setTheme(JspencThemeDark);
      return;
    }
    setTheme(JspencThemeLight);
  };

  useEffect(() => {
    const userThemeKey = localStorage.getItem('theme');
    if (userThemeKey) {
      const userTheme = themes.get(userThemeKey);
      if (userTheme) {
        setTheme(userTheme);
        return;
      }
    }

    if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
      setTheme(JspencThemeDark);
    }
  }, []);

  const providerValue = {
    currentTheme: currentTheme,
    toggleTheme: toggleTheme,
  };

  return (
    <SiteThemeContext.Provider value={providerValue}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </SiteThemeContext.Provider>
  );
};

/*TODO REFACTOR: split to own file*/
export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <>
      <Global
        styles={{
          body: {
            margin: 0,
            height: '100%',
            backgroundColor: theme.colors.interfaceBackground,
          },
        }}
      />
      <Global
        styles={`
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
    </>
  );
};

export const BaseProvider = ({ children }: BaseProviderProps) => {
  return (
    <SiteThemeProvider>
      <GlobalStyles />
      {children}
    </SiteThemeProvider>
  );
};
