import { renderWithTheme } from '../testing-utils';
import { MediaCardList } from './media-card-list';

const mediaCardListProps = [ {
    href: "https://jspenc.com",
    headline: "Jspenc",
    children : "lorem ipsum"
  }];

describe('MediaCardList', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithTheme(<MediaCardList title="Content" cards={mediaCardListProps} />);
    expect(baseElement).toMatchSnapshot();
  });
});
