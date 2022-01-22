import { Stack, TextBlock, styled, Divider, Block, getSpacingCssFromTheme } from 'newskit';

const FooterContainer = styled.footer`
  ${getSpacingCssFromTheme('marginBottom', 'space030')};
  ${getSpacingCssFromTheme('marginTop', 'space030')};
`;

export const Footer = () => 
  <FooterContainer>
    <Block spaceStack="space030">
      <Divider/>
    </Block>
    <Stack flow="horizontal-center" stackDistribution="flex-end">
      <TextBlock typographyPreset="utilityBody010" stylePreset="inkBase">
      James Spencer {new Date().getFullYear()} &copy;
      </TextBlock>
    </Stack>
  </FooterContainer>