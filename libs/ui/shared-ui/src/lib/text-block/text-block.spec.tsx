import { render, screen } from '@testing-library/react';
import { TextBlock } from './text-block';

describe('TextBlock', () => {
  it('renders children with the default paragraph tag and block crop', () => {
    render(
      <TextBlock typographyPreset="utilityBody030">Hello world</TextBlock>
    );
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('P');
    expect(element.className).toContain('blockCrop');
  });

  it('omits blockCrop when rendered as an inline span', () => {
    render(
      <TextBlock as="span" typographyPreset="utilityBody030">
        Inline text
      </TextBlock>
    );
    const element = screen.getByText('Inline text');
    expect(element.tagName).toBe('SPAN');
    expect(element.className).not.toContain('blockCrop');
  });
});
