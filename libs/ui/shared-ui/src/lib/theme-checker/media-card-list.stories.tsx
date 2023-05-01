import { Meta } from '@storybook/react';
import { BaseProvider } from '../..';
import { ThemeChecker } from 'newskit';

export default {
  component: ThemeChecker,
  title: 'ThemeChecker',
} as Meta;

export const TestCard = () =>
  <BaseProvider>
    <ThemeChecker/>
  </BaseProvider>;