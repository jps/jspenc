import { fireEvent, render, screen } from '@testing-library/react';
import { IconButton } from './icon-button';

describe('IconButton', () => {
  it('renders a button when no href is provided', () => {
    const onClick = jest.fn();
    render(
      <IconButton aria-label="toggle theme" onClick={onClick}>
        <span>icon</span>
      </IconButton>
    );
    const button = screen.getByRole('button', { name: 'toggle theme' });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders a link when href is provided', () => {
    render(
      <IconButton aria-label="github" href="https://github.com/jps">
        <span>icon</span>
      </IconButton>
    );
    const link = screen.getByRole('link', { name: 'github' });
    expect(link.getAttribute('href')).toBe('https://github.com/jps');
  });
});
