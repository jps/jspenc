import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';
import { BaseProvider, mockMatchMedia } from '@jspenc/ui/shared-ui';

describe('Index', () => {
  it('should render successfully', () => {
    mockMatchMedia();
    const { baseElement } = render(
      <BaseProvider>
        <Index />
      </BaseProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
