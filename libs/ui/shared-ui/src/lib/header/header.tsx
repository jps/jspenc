import {
  Block,
  IconFilledGitHub,
  Stack,
  IconButton,
  IconFilledTwitter,
  styled,
} from 'newskit';
import Link from 'next/link';
import { Logo } from '../logo/logo';

const HeaderContainer = styled.header`
  margin-top: 16px;
`;

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
            overrides={{ stylePreset: 'iconButtonMinimalSecondary' }}
            href="https://github.com/jps"
          >
            <IconFilledGitHub overrides={{ size: 'iconSize030' }} />
          </IconButton>
          <IconButton
            aria-label="twitter"
            overrides={{ stylePreset: 'iconButtonMinimalSecondary' }}
            href="https://twitter.com/jpspenc"
          >
            <IconFilledTwitter overrides={{ size: 'iconSize030' }} />
          </IconButton>
        </Stack>
      </Block>
    </Stack>
  </HeaderContainer>
);
