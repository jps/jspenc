import {
  createTheme,
  newskitDarkThemeOverrides,
  newskitLightTheme,
  StylePreset,
} from 'newskit';

export const fonts = {
  fontFamily010: {
    fontFamily: "'DM Sans', Arial, sans-serif",
    fontMetrics: {
      fontWeight010: {
        capHeight: 700,
        ascent: 992,
        descent: -310,
        lineGap: 0,
        unitsPerEm: 1000,
      },
    },
  },
  fontFamily020: {
    fontFamily: "'Raleway', Arial, sans-serif",
    fontMetrics: {
      fontWeight010: {
        capHeight: 710,
        ascent: 940,
        descent: -234,
        lineGap: 0,
        unitsPerEm: 1000,
      },
    },
  },

  fontFamily030: {
    fontFamily: "'DM Mono', monospace",
    fontMetrics: {
      fontWeight010: {
        ascent: 992,
        capHeight: 700,
        descent: -310,
        lineGap: 0,
        unitsPerEm: 1000,
      },
    },
    cropAdjustments: '__delete',
  },
};

const stylePresets: Record<string, StylePreset> = {
  inkBase: {
    base: {
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
    },
  },
  titleBar: {
    base: {
      borderWidth: '0 0 1px 0',
      borderStyle: 'solid',
      color: '{{colors.inkBase}}',
    },
  },
  cardContainer: {
    base: {
      backgroundColor: 'unset',
    },
  },
};

const componentDefaults = {
  titleBar: {
    spaceInset: 'space000',
    paddingBlock: 'space000',
    paddingInline: 'space000',
    heading: {
      stylePresets: 'inkBase',
    },
  },
};

const colors = {
  interactiveVisited010: '{}',
  // https://coolors.co/161032-194163-1c7293-55a7bd-8edce6-9db7d3-e4dfda-d4b483-d5dcf9-f2f4f3
};

export const JspencThemeLight = createTheme({
  name: 'jspenc-light',
  baseTheme: newskitLightTheme,
  overrides: {
    colors: colors,
    fonts: fonts,
    componentDefaults: componentDefaults,
    stylePresets: stylePresets,
  },
});

const jspencDarkThemeOverrides = {
  colors: {
    interfaceBackground: '#000000',
    inkBase: '#B8A9A9',
    inkContrast: '#B8A9A9',
  },
};

export const JspencThemeDark = createTheme({
  name: 'jspenc-dark',
  baseTheme: JspencThemeLight,
  overrides: { ...newskitDarkThemeOverrides, ...jspencDarkThemeOverrides },
});
