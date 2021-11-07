import { createTheme, newskitLightTheme, StylePreset } from 'newskit';

export const fonts = {
  fontFamily010: {
    fontFamily: "'DM Sans', sans-serif",
    cropConfig: {
      top: 9,
      bottom: 9,
    },
  },

  fontFamily020: {
    fontFamily: "'Raleway', sans-serif",
    cropConfig: {
      top: 8,
      bottom: 9,
    },
  },

  fontFamily030: {
    fontFamily: "'DM Mono', monospace",
    cropConfig: {
      top: 10,
      bottom: 8,
    },
    cropAdjustments: '__delete',
  },
};

const stylePresets: Record<string, StylePreset> = {
  titleBar: {
    base: {
      borderWidth: '0 0 1px 0',
      borderStyle: 'solid',
    },
  },
};

const componentDefaults = {
  titleBar: {
    spaceInset: 'space000',
  },
};

export const JspencTheme = createTheme({
  name: 'jspenc',
  baseTheme: newskitLightTheme,
  overrides: {
    fonts: fonts,
    componentDefaults: componentDefaults,
    stylePresets: stylePresets,
  },
});
