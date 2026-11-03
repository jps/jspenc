import { renderWithTheme } from '../testing-utils';
import { MediaCard } from '../media-card/media-card';
import { MediaCardList } from './media-card-list';

describe('MediaCardList', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithTheme(
      <MediaCardList title="Content">
        <MediaCard href="https://jspenc.com" headline="Jspenc">
          lorem ipsum
        </MediaCard>
      </MediaCardList>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
