import React from 'react';
import styles from './stack.module.css';

export type StackFlow =
  | 'vertical-stretch'
  | 'vertical-left'
  | 'horizontal-center';

export type StackDistribution = 'space-between' | 'flex-end' | 'flex-start';

export type SpaceToken =
  | 'space000'
  | 'space020'
  | 'space030'
  | 'space040'
  | 'space050'
  | 'space060';

export interface StackProps {
  children: React.ReactNode;
  flow?: StackFlow;
  stackDistribution?: StackDistribution;
  spaceInline?: SpaceToken;
  list?: boolean;
  className?: string;
}

export const Stack = ({
  children,
  flow = 'vertical-left',
  stackDistribution = 'flex-start',
  spaceInline = 'space000',
  list = false,
  className,
}: StackProps) => {
  const combinedClassName = [
    styles.stack,
    styles[`flow-${flow}`],
    styles[`dist-${stackDistribution}`],
    styles[`space-${spaceInline}`],
    list ? styles.list : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (list) {
    const items = React.Children.toArray(children);
    return (
      <ul className={combinedClassName}>
        {items.map((child, index) => (
          <li
            key={
              React.isValidElement(child) && child.key != null
                ? child.key
                : index
            }
            className={styles.listItem}
          >
            {child}
          </li>
        ))}
      </ul>
    );
  }

  return <div className={combinedClassName}>{children}</div>;
};
