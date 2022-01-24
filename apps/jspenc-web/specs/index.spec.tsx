import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';
import { BaseProvider } from '@jspenc/ui/shared-ui';

//Not yet implemented by JSDOM https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
const mockMatchMedia = () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

describe('Index', () => {
  it('should render successfully', () => {
    mockMatchMedia();
    const { baseElement } = render(<BaseProvider><Index /></BaseProvider>);
    expect(baseElement).toBeTruthy();
  });
});
