import { useTheme } from '../base-provider/base-provider';

const globalCss = `
  @font-face {
    font-family: 'DM Sans';
    src: url('/fonts/dmsans-regular.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'DM Sans';
    src: url('/fonts/dmsans-italic.woff2') format('woff2');
    font-style: italic;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'DM Sans';
    src: url('/fonts/dmsans-bold.woff2') format('woff2');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'DM Sans';
    src: url('/fonts/dmsans-bolditalic.woff2') format('woff2');
    font-style: italic;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/raleway-light.woff2') format('woff2');
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/raleway-lightItalic.woff2') format('woff2');
    font-style: italic;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/raleway-semibold.woff2') format('woff2');
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/raleway-semibolditalic.woff2') format('woff2');
    font-style: italic;
    font-weight: 600;
    font-display: swap;
  }

  :root,
  [data-theme='jspenc-light'] {
    --font-sans: 'DM Sans', Arial, sans-serif;
    --font-editorial: 'Raleway', Arial, sans-serif;
    --font-mono: 'DM Mono', monospace;

    --space-000: 0px;
    --space-010: 4px;
    --space-020: 8px;
    --space-030: 12px;
    --space-040: 16px;
    --space-050: 24px;
    --space-060: 32px;
    --space-070: 40px;

    --color-interface-background: #ffffff;
    --color-ink-base: #3B3B3B;
    --color-ink-contrast: #111111;
    --color-ink-subtle: #6A6A6A;
    --color-border-divider: #E2E2E2;
    --color-interactive-hover-bg: rgba(59, 59, 59, 0.08);
  }

  [data-theme='jspenc-dark'] {
    --color-interface-background: #000000;
    --color-ink-base: #B8A9A9;
    --color-ink-contrast: #B8A9A9;
    --color-ink-subtle: #9e8f8f;
    --color-border-divider: #332e2e;
    --color-interactive-hover-bg: rgba(184, 169, 169, 0.14);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    height: 100%;
    background-color: var(--color-interface-background);
    color: var(--color-ink-base);
    font-family: var(--font-sans);
    transition: background-color 0.5s cubic-bezier(0.77, 0, 0.18, 1),
      color 0.5s cubic-bezier(0.77, 0, 0.18, 1);
  }

  a {
    color: inherit;
  }
`;

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <style
      data-theme={theme.name}
      dangerouslySetInnerHTML={{
        __html: `${globalCss}\nbody { background-color: ${theme.colors.interfaceBackground}; color: ${theme.colors.inkBase}; }`,
      }}
    />
  );
};
