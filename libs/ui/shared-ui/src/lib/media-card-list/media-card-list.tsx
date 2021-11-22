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
      <TitleBar headingAs="h2">{title}</TitleBar>
    </Block>
    <Stack flow="vertical-left" spaceInline="space060" list>
      {cards.map((article, i) => (
        <MediaCard key={i} {...article} />
      ))}
    </Stack>
  </Section>
);
