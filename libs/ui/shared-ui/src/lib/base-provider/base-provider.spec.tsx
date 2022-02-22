import { renderWithTheme } from '../testing-utils';
import { BaseProvider } from './base-provider';

describe('BaseProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithTheme(<BaseProvider><span>Content is passed through</span></BaseProvider>);
    expect(baseElement).toMatchSnapshot();
  });
});
