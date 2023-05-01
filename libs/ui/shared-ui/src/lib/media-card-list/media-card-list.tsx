import { Block, TitleBar, Stack, styled } from 'newskit';

export interface MediaCardListProps {
  title: string;
  children: Exclude<React.ReactNode, 'undefined'>;
}

const Section = styled.section`
  width: 100%;
`;

export const MediaCardList = ({ title, children }: MediaCardListProps) => {
  const cards = Array.isArray(children) ? children : [children];
  return (
    <Section>
      {/* This block override has been added due to a bug in the title bar */}
      <Block marginBlockEnd="space060">
        <TitleBar headingAs="h2">{title}</TitleBar>
      </Block>
      <Stack flow="vertical-left" spaceInline="space060" list>
        {cards}
      </Stack>
    </Section>
  );
};
