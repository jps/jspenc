import { renderWithTheme } from '../testing-utils/render-with-theme';
import { Footer } from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithTheme(<Footer />);
    expect(baseElement).toBeTruthy();
  });
});
