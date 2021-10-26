import { render } from '@testing-library/react';

import BaseProvider from './base-provider';

describe('BaseProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseProvider><span>Content is passed through</span></BaseProvider>);
    expect(baseElement).toMatchSnapshot();
  });
});
