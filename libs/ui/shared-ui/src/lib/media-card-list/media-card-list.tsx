import { Block, TitleBar, Stack } from 'newskit';
import { MediaCard, MediaCardProps } from '../..';

export interface MediaCardListProps {
  title: string;
  cards: MediaCardProps[];
}

export const MediaCardList = ({title, cards}: MediaCardListProps) => (
  <section>
    <Block spaceStack="space060">
      <TitleBar headingAs="h2">{title}</TitleBar>
    </Block>
    <Stack flow="vertical-left" spaceInline="space060" list>
      {cards.map((article, i) => (
        <MediaCard key={i} {...article} />
      ))}
    </Stack>
  </section>
);
