import { createTheme, newskitLightTheme, StylePreset } from 'newskit';

export const fonts = {
  fontFamily010: {
    fontFamily: "'DM Sans', Arial, sans-serif",
    cropConfig: {
      top: 9,
      bottom: 4,
    },
  },

  fontFamily020: {
    fontFamily: "'Raleway', Arial, sans-serif",
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

const colors = {
  interactiveVisited010: '{}',
  // https://coolors.co/161032-194163-1c7293-55a7bd-8edce6-9db7d3-e4dfda-d4b483-d5dcf9-f2f4f3
  
}

export const JspencTheme = createTheme({
  name: 'jspenc',
  baseTheme: newskitLightTheme,
  overrides: {
    colors: colors,
    fonts: fonts,
    componentDefaults: componentDefaults,
    stylePresets: stylePresets,
  },
});
