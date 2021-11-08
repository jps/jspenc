import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';
import { BaseProvider } from '@jspenc/ui/shared-ui';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseProvider><Index /></BaseProvider>);
    expect(baseElement).toBeTruthy();
  });
});
