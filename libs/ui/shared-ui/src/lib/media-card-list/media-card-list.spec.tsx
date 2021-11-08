import { render } from '@testing-library/react';

import { MediaCardList } from './media-card-list';

const mediaCardListProps = [ {
    href: "https://jspenc.com",
    headline: "Jspenc",
    children : "lorem ipsum"
  }];

describe('MediaCardList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MediaCardList title="Content" cards={mediaCardListProps} />);
    expect(baseElement).toMatchSnapshot();
  });
});
