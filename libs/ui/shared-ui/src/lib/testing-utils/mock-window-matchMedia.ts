//Not yet implemented by JSDOM https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
export const mockMatchMedia = () => {
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
  