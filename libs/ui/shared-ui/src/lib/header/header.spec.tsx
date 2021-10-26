import { renderWithTheme } from '../teting-utils/render-with-theme';

import { Header } from './header';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithTheme(<Header />);
    expect(baseElement).toMatchSnapshot();
  });
});
