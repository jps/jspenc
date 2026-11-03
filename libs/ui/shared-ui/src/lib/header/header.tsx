import Link from 'next/link';
import { ReactNode, useContext } from 'react';
import { SiteThemeContext } from '../base-provider/base-provider';
import { IconButton } from '../icon-button/icon-button';
import {
  IconFilledGitHub,
  IconFilledTwitter,
  IconWeatherMoon,
  IconWeatherSunny,
} from '../icons';
import { Logo } from '../logo/logo';
import { Stack } from '../stack/stack';
import { JspencThemeLight } from '../theme/theme';
import styles from './header.module.css';

const DayNightModeToggle = () => {
  const { currentTheme, toggleTheme } = useContext(SiteThemeContext);
  const isLightTheme = currentTheme.name === JspencThemeLight.name;

  const createButton = (children: ReactNode, ariaLabel: string) => (
    <IconButton
      aria-label={ariaLabel}
      onClick={() => {
        toggleTheme();
      }}
    >
      {children}
    </IconButton>
  );

  return isLightTheme
    ? createButton(<IconWeatherMoon />, 'enable night mode')
    : createButton(<IconWeatherSunny />, 'enable day mode');
};

export const Header = () => (
  <header className={styles.header}>
    <Stack flow="horizontal-center" stackDistribution="space-between">
      <div>
        <Link href="/">
          <Logo title="Go to James Spencer home" />
        </Link>
      </div>
      <div>
        <Stack flow="horizontal-center" spaceInline="space030">
          <IconButton aria-label="github" href="https://github.com/jps">
            <IconFilledGitHub />
          </IconButton>
          <IconButton aria-label="twitter" href="https://twitter.com/jpspenc">
            <IconFilledTwitter />
          </IconButton>
          <DayNightModeToggle />
        </Stack>
      </div>
    </Stack>
  </header>
);
