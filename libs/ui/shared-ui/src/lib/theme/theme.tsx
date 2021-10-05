export const fonts = {
  fontFamily010: {
    fontFamily: "'Raleway', sans-serif",
    cropConfig: {
      top: 7.5,
      bottom: 12,
    },
    cropAdjustments: {
      __shallow: true,
      '{{fonts.fontSize010}}': {
        top: 1.5,
        bottom: 0,
      },
      '{{fonts.fontSize020}}': {
        top: 0,
      },
    },
  },

  fontFamily020: {
    fontFamily: "'DM Sans', sans-serif",
    cropConfig: {
      top: 8.5,
      bottom: 9.5,
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
