import { render } from '@testing-library/react';

import MediaCard from './media-card';

describe('MediaCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MediaCard href='#' headline='Test Card' children='lorem ipsum.' />);
    expect(baseElement).toBeTruthy();
  });
});
