import { Meta } from '@storybook/react';
import { TextBlock } from '../text-block/text-block';
import { BaseProvider } from './base-provider';

export default {
  component: BaseProvider,
  title: 'BaseProvider',
  decorators: [],
} as Meta;

export const ContentInBaseProvider = () => (
  <BaseProvider>
    <TextBlock>Hello World</TextBlock>
  </BaseProvider>
);
