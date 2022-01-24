import { renderWithTheme } from '../testing-utils';

import { MediaCard } from './media-card';

describe('MediaCard', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithTheme(
      <MediaCard href="#" headline="Test Card" children="lorem ipsum." />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
