import { Meta } from '@storybook/react';
import { BaseProvider } from '../..';
import { Header } from './header';

export default {
  component: Header,
  title: 'Header',
} as Meta;

export const HeaderDefault = () =>
  <BaseProvider>
    <Header />
  </BaseProvider>;