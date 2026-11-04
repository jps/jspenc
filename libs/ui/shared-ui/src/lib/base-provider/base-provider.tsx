import React, { createContext, useContext, useEffect, useState } from 'react';
import { JspencTheme, JspencThemeDark, JspencThemeLight } from '../theme/theme';

export interface BaseProviderProps {
  children: React.ReactNode;
}

export type SiteThemeContext = {
  currentTheme: JspencTheme;
  toggleTheme: () => void;
};

export const SiteThemeContext = createContext<SiteThemeContext>({
  currentTheme: JspencThemeLight,
  toggleTheme: () => {
    console.error('undefined, I should never be executed');
  },
});

export const useTheme = (): JspencTheme => {
  const { currentTheme } = useContext(SiteThemeContext);
  return currentTheme;
};

const themes = new Map<string, JspencTheme>([
  [JspencThemeLight.name, JspencThemeLight],
  [JspencThemeDark.name, JspencThemeDark],
]);

export const BaseProvider = ({ children }: BaseProviderProps) => {
  const [currentTheme, setCurrentTheme] =
    useState<JspencTheme>(JspencThemeLight);
  const isLightTheme = currentTheme.name === JspencThemeLight.name;

  const setTheme = (theme: JspencTheme) => {
    setCurrentTheme(theme);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme.name);
    }
    try {
      localStorage.setItem('theme', theme.name);
    } catch {
      // Ignore storage errors (e.g. blocked storage or quota exceeded)
    }
  };

  const toggleTheme = () =>
    setTheme(isLightTheme ? JspencThemeDark : JspencThemeLight);

  useEffect(() => {
    try {
      const userThemeKey = localStorage.getItem('theme');
      if (userThemeKey) {
        const userTheme = themes.get(userThemeKey);
        if (userTheme) {
          setTheme(userTheme);
          return;
        }
      }
    } catch {
      // Ignore storage read errors
    }

    if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
      setTheme(JspencThemeDark);
      return;
    }

    document.documentElement.setAttribute('data-theme', JspencThemeLight.name);
  }, []);

  const providerValue = {
    currentTheme: currentTheme,
    toggleTheme: toggleTheme,
  };

  return (
    <SiteThemeContext.Provider value={providerValue}>
      {children}
    </SiteThemeContext.Provider>
  );
};
