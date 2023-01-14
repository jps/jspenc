import { Meta } from '@storybook/react';
import { BaseProvider } from '../..';
import { MediaCard } from './media-card';

export default {
  component: MediaCard,
  title: 'MediaCard',
} as Meta;

export const TestCard = () =>
  <BaseProvider>
    <MediaCard href="#" headline='Hello World'>something something something else</MediaCard>
  </BaseProvider>;