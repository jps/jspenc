import { Meta } from '@storybook/react';
import { BaseProvider } from '../base-provider/base-provider';
import { TextBlock } from './text-block';

export default {
  component: TextBlock,
  title: 'TextBlock',
} as Meta;

export const Default = () => (
  <BaseProvider>
    <TextBlock typographyPreset="utilityBody030" stylePreset="inkBase">
      Sample body text rendered with TextBlock.
    </TextBlock>
  </BaseProvider>
);
