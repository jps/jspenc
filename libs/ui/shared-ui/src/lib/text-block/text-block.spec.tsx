import { render, screen } from '@testing-library/react';
import { TextBlock } from './text-block';

describe('TextBlock', () => {
  it('renders children with the default paragraph tag', () => {
    render(
      <TextBlock typographyPreset="utilityBody030">Hello world</TextBlock>
    );
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('P');
  });
});
