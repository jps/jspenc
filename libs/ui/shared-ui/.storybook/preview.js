import { BaseProvider } from '../src';

export const decorators = [
  (Story) => (
    <BaseProvider>
      <Story />
    </BaseProvider>
  ),
];