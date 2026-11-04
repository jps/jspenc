import { Meta } from '@storybook/react';
import { BaseProvider } from '../base-provider/base-provider';
import { IconFilledGitHub } from '../icons';
import { IconButton } from './icon-button';

export default {
  component: IconButton,
  title: 'IconButton',
} as Meta;

export const Default = () => (
  <BaseProvider>
    <IconButton aria-label="github" href="https://github.com/jps">
      <IconFilledGitHub />
    </IconButton>
  </BaseProvider>
);
