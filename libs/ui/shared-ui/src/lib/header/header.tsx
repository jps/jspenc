import {
  Block,
  IconFilledGitHub,
  Stack,
  IconButton,
  IconFilledTwitter,
  styled,
  getSpacingCssFromTheme,
  toNewsKitIcon,
} from 'newskit';
import { WeatherMoon } from '@emotion-icons/fluentui-system-filled/WeatherMoon';
import { WeatherSunny } from '@emotion-icons/fluentui-system-filled/WeatherSunny'
import Link from 'next/link';
import { ReactNode, useContext } from 'react';
import { SiteThemeContext } from '../..';
import { Logo } from '../logo/logo';
import { JspencThemeLight } from '../theme/theme';

const HeaderContainer = styled.header`
  ${getSpacingCssFromTheme('marginTop', 'space040')};
  ${getSpacingCssFromTheme('marginBottom', 'space040')};
`;

const defaultButtonStyle = {
  overrides: { stylePreset: 'iconButtonMinimalSecondary' },
};
const defaultIconSize = { overrides: { size: 'iconSize030' } };

const MoonIcon = toNewsKitIcon(WeatherMoon);
const SunIcon = toNewsKitIcon(WeatherSunny);

const DayNightModeToggle = () => {
  const { currentTheme, toggleTheme } = useContext(SiteThemeContext);
  const isLightTheme = currentTheme.name === JspencThemeLight.name;
  
  const createButton = (
    children: ReactNode,
    ariaLabel: string  ) => (
    <IconButton
      children={children}
      aria-label={ariaLabel}
      onClick={() => {
        toggleTheme();
      }}
      {...defaultButtonStyle}
    />
  );

  return isLightTheme
    ? createButton(
        <MoonIcon {...defaultIconSize} />,
        'enable night mode'
      )
    : createButton(
        <SunIcon {...defaultIconSize} />,
        'enable day mode'
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
