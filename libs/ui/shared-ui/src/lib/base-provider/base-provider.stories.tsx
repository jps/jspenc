import { Story, Meta } from '@storybook/react';
import { BaseProvider, BaseProviderProps } from './base-provider';

export default {
  component: BaseProvider,
  title: 'BaseProvider',
} as Meta;

const Template: Story<BaseProviderProps> = (args) => <BaseProvider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
