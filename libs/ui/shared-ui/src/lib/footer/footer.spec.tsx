import { renderWithTheme } from '../teting-utils/render-with-theme';
import { Footer } from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithTheme(<Footer />);
    expect(baseElement).toBeTruthy();
  });
});
