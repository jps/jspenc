import { Stack, TextBlock, styled, Divider, Block, getSpacingCssFromTheme } from 'newskit';

const FooterContainer = styled.footer`
  ${getSpacingCssFromTheme('margin-bottom', 'space030')};
  ${getSpacingCssFromTheme('margin-top', 'space030')};
`;

export const Footer = () => 
  <FooterContainer>
    <Block spaceStack="space030">
      <Divider/>
    </Block>
    <Stack flow="horizontal-center" stackDistribution="flex-end">
      <TextBlock typographyPreset="utilityBody010">
      James Spencer {new Date().getFullYear()} &copy;
      </TextBlock>
    </Stack>
  </FooterContainer>