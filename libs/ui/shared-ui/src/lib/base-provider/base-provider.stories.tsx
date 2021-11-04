import { Meta } from '@storybook/react';
import { Button } from 'newskit';
import { BaseProvider } from './base-provider';

export default {
  component: BaseProvider,
  title: 'BaseProvider',
} as Meta;

export const ButtonInBaseProvider = () => (
  <BaseProvider>
    <Button>Hello World</Button>
  </BaseProvider>
);
