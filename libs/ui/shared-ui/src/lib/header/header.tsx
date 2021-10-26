import {
  Block,
  IconFilledGitHub,
  Stack,
  IconButton,
  IconFilledTwitter,
  Link,
  styled,
} from 'newskit';

const HeaderContainer = styled.header`margin-top:16px;`;

export const Header = () => (
  <HeaderContainer>
    <Stack flow="horizontal-center" stackDistribution="space-between">
      <Block>
        <Link href="/">James Spencer</Link>
      </Block>
      <Block>
        <Stack flow="horizontal-center" spaceInline="space030">
          <IconButton aria-label="github">
            <IconFilledGitHub overrides={{ size: 'iconSize020' }} />
          </IconButton>
          <IconButton aria-label="twitter">
            <IconFilledTwitter overrides={{ size: 'iconSize020' }} />
          </IconButton>
        </Stack>
      </Block>
    </Stack>
  </HeaderContainer>
);
