import { Stack, TextBlock, styled } from 'newskit';

const FooterContainer = styled.footer`
  margin-bottom:12px;
`;

export const Footer = () => 
  <FooterContainer>
    <Stack flow="horizontal-center" stackDistribution="flex-end">
      <TextBlock>
      James Spencer {new Date().getFullYear()} &copy;
      </TextBlock>
    </Stack>
  </FooterContainer>