import { Meta } from '@storybook/react';
import { BaseProvider } from '../base-provider/base-provider';
import { TextBlock } from '../text-block/text-block';
import { Stack } from './stack';

export default {
  component: Stack,
  title: 'Stack',
} as Meta;

export const VerticalStack = () => (
  <BaseProvider>
    <Stack flow="vertical-stretch" spaceInline="space040">
      <TextBlock>First item</TextBlock>
      <TextBlock>Second item</TextBlock>
    </Stack>
  </BaseProvider>
);
