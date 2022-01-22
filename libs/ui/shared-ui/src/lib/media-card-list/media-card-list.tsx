import { Block, TitleBar, Stack, styled } from 'newskit';
import { MediaCard, MediaCardProps } from '../..';

export interface MediaCardListProps {
  title: string;
  cards: MediaCardProps[];
}

const Section = styled.section`
  width:100%;
`;

export const MediaCardList = ({title, cards}: MediaCardListProps) => (
  <Section>
    <Block spaceStack="space060">
      {/* This inline override has been added due to a bug in the title bar */}
      <TitleBar headingAs="h2" overrides={{heading:{stylePreset:'inkBase'}}}>{title}</TitleBar>
    </Block>
    <Stack flow="vertical-left" spaceInline="space060" list>
      {cards.map((article, i) => (
        <MediaCard key={i} {...article} />
      ))}
    </Stack>
  </Section>
);
