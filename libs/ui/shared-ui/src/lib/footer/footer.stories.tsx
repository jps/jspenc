import { Meta } from '@storybook/react';
import { BaseProvider } from '../base-provider/base-provider';
import { Footer } from './footer';

export default {
  component: Footer,
  title: 'Footer',
} as Meta;

export const FooterDefault = () => (
  <BaseProvider>
    <Footer />
  </BaseProvider>
);
