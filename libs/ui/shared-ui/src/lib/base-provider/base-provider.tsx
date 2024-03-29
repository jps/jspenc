import { NewsKitProvider, UncompiledTheme } from 'newskit';
import { createContext, useEffect, useState } from 'react';
import { JspencThemeDark, JspencThemeLight } from '../theme/theme';

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

const themes = new Map([
  [JspencThemeLight.name, JspencThemeLight],
  [JspencThemeDark.name, JspencThemeDark],
]);

export const BaseProvider = ({ children }: BaseProviderProps) => {

  const [currentTheme, setCurrentTheme] = useState<UncompiledTheme>(JspencThemeLight);
  const isLightTheme = currentTheme.name === JspencThemeLight.name;

  const setTheme = (theme: UncompiledTheme) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme.name);
  };

  const toggleTheme = () =>  setTheme(isLightTheme ? JspencThemeDark : JspencThemeLight);

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
      <NewsKitProvider theme={currentTheme}>{children}</NewsKitProvider>
    </SiteThemeContext.Provider>
  );
};