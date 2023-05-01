import { Meta } from '@storybook/react';
import { BaseProvider } from '../..';
import { MediaCardList } from './media-card-list';
import { MediaCard } from '../media-card/media-card';

export default {
  component: MediaCardList,
  title: 'MediaCardList',
} as Meta;

export const TestCard = () =>
  <BaseProvider>
    <MediaCardList title='Latest Posts'>
      <MediaCard href="#" headline='Hello World'>something something something else</MediaCard>
    </MediaCardList>
  </BaseProvider>;