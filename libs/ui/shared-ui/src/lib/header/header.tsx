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
} from 'newskit';
import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '../logo/logo';

const HeaderContainer = styled.header`
  ${getSpacingCssFromTheme('margin-top', "space040")};  
  ${getSpacingCssFromTheme('margin-bottom', "space040")};
`;

const defaultButtonStyle = {overrides:{ stylePreset: 'iconButtonMinimalSecondary' } };
const defaultIconSize = {overrides:{ size: 'iconSize030' }};

const DayNightModeSwitch = () => {
  const [isInDayMode, setDayNightMode] = useState(false);

  const buttonProps = isInDayMode ?{
    children : <IconFilledBedtime {...defaultIconSize}/>,
    "aria-label" : "enable night mode"
  } : {
    children : <IconFilledWbSunny {...defaultIconSize}/>,
    "aria-label" : "enable day mode"
  }

  return <IconButton {...buttonProps} {...defaultButtonStyle} onClick={() => setDayNightMode(!isInDayMode)} />  
}

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
          <DayNightModeSwitch/>
        </Stack>
      </Block>
    </Stack>
  </HeaderContainer>
);
