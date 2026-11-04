import { BaseProvider, GlobalStyles } from '../src';

export const decorators = [
  (Story) => (
    <BaseProvider>
      <GlobalStyles />
      <Story />
    </BaseProvider>
  ),
];
