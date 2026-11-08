import { render, screen } from '@testing-library/react';
import { Stack } from './stack';

describe('Stack', () => {
  it('renders a div container by default', () => {
    render(
      <Stack flow="horizontal-center" spaceInline="space030">
        <span>Item 1</span>
        <span>Item 2</span>
      </Stack>
    );
    expect(screen.getByText('Item 1')).toBeTruthy();
    expect(screen.getByText('Item 2')).toBeTruthy();
  });

  it('renders a list when list prop is true', () => {
    render(
      <Stack list spaceInline="space060">
        <span>Card 1</span>
        <span>Card 2</span>
      </Stack>
    );
    expect(screen.getByRole('list')).toBeTruthy();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
