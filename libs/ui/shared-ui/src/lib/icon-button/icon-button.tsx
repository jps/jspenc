import React from 'react';
import styles from './icon-button.module.css';

export interface IconButtonProps {
  children: React.ReactNode;
  'aria-label': string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
}

export const IconButton = ({
  children,
  'aria-label': ariaLabel,
  href,
  onClick,
  className,
}: IconButtonProps) => {
  const combinedClassName = [styles.iconButton, className]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        onClick={onClick}
        className={combinedClassName}
        data-testid="buttonLink"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={combinedClassName}
      data-testid="button"
    >
      {children}
    </button>
  );
};
