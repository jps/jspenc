import { Global, useTheme } from 'newskit';

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
            transition: 'background-color 0.5s cubic-bezier(.77,0,.18,1);',
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
