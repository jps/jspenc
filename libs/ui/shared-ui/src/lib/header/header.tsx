import {
  Block,
  IconFilledGitHub,
  Stack,
  IconButton,
  IconFilledTwitter,
  styled,
  getSpacingCssFromTheme,
  IconFilledWbSunny,
  IconFilledBedtime,
  UncompiledTheme,
} from 'newskit';
import Link from 'next/link';
import { ReactNode, useContext } from 'react';
import { SiteThemeContext } from '../..';
import { Logo } from '../logo/logo';
import { JspencThemeDark, JspencThemeLight } from '../theme/theme';

const HeaderContainer = styled.header`
  ${getSpacingCssFromTheme('marginTop', 'space040')};
  ${getSpacingCssFromTheme('marginBottom', 'space040')};
`;

const defaultButtonStyle = {
  overrides: { stylePreset: 'iconButtonMinimalSecondary' },
};
const defaultIconSize = { overrides: { size: 'iconSize030' } };

const DayNightModeToggle = () => {
  const { theme, setTheme } = useContext(SiteThemeContext);

  const isLightTheme = theme.name === JspencThemeLight.name;

  const createButton = (
    children: ReactNode,
    ariaLabel: string,
    theme: UncompiledTheme
  ) => (
    <IconButton
      children={children}
      aria-label={ariaLabel}
      onClick={() => {setTheme(theme)}}
      {...defaultButtonStyle}
    />
  );

  return isLightTheme
    ? createButton(
        <IconFilledBedtime {...defaultIconSize} />,
        'enable night mode',
        JspencThemeDark
      )
    : createButton(
        <IconFilledWbSunny {...defaultIconSize} />,
        'enable day mode',
        JspencThemeLight
      );
};

export const Header = () => (
  <HeaderContainer>
    <Stack flow="horizontal-center" stackDistribution="space-between">
      <Block>
        <Link href="/" passHref>
          {/* This href attribute isn't technically needed but gets around linter warnings because of next.js's weird api */}
          <a href="/">
            <Logo title="Go to James Spencer home" />
          </a>
        </Link>
      </Block>
      <Block>
        <Stack flow="horizontal-center" spaceInline="space030">
          <IconButton
            aria-label="github"
            {...defaultButtonStyle}
            href="https://github.com/jps"
          >
            <IconFilledGitHub {...defaultIconSize} />
          </IconButton>
          <IconButton
            aria-label="twitter"
            {...defaultButtonStyle}
            href="https://twitter.com/jpspenc"
          >
            <IconFilledTwitter {...defaultIconSize} />
          </IconButton>
          <DayNightModeToggle />
        </Stack>
      </Block>
    </Stack>
  </HeaderContainer>
);
