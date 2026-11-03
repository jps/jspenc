import React from 'react';
import styles from './text-block.module.css';

export type TypographyPreset =
  | 'utilityBody010'
  | 'utilityBody030'
  | 'editorialParagraph020';

export type StylePreset = 'inkBase';

export interface TextBlockProps {
  children: React.ReactNode;
  typographyPreset?: TypographyPreset;
  stylePreset?: StylePreset;
  as?: 'p' | 'span' | 'div';
  className?: string;
}

export const TextBlock = ({
  children,
  typographyPreset = 'utilityBody030',
  stylePreset = 'inkBase',
  as: Component = 'p',
  className,
}: TextBlockProps) => {
  const combinedClassName = [
    styles.textBlock,
    styles[typographyPreset],
    styles[stylePreset],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Component className={combinedClassName}>{children}</Component>;
};
