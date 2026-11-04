export interface JspencTheme {
  name: 'jspenc-light' | 'jspenc-dark';
  colors: {
    interfaceBackground: string;
    inkBase: string;
    inkContrast: string;
    inkSubtle: string;
    borderDivider: string;
  };
}

export const fonts = {
  fontFamily010: {
    fontFamily: "'DM Sans', Arial, sans-serif",
  },
  fontFamily020: {
    fontFamily: "'Raleway', Arial, sans-serif",
  },
  fontFamily030: {
    fontFamily: "'DM Mono', monospace",
  },
};

export const JspencThemeLight: JspencTheme = {
  name: 'jspenc-light',
  colors: {
    interfaceBackground: '#ffffff',
    inkBase: '#3B3B3B',
    inkContrast: '#111111',
    inkSubtle: '#6A6A6A',
    borderDivider: '#E2E2E2',
  },
};

export const JspencThemeDark: JspencTheme = {
  name: 'jspenc-dark',
  colors: {
    interfaceBackground: '#000000',
    inkBase: '#B8A9A9',
    inkContrast: '#B8A9A9',
    inkSubtle: '#9e8f8f',
    borderDivider: '#332e2e',
  },
};
