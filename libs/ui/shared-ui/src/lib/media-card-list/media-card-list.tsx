import React from 'react';
import { Stack } from '../stack/stack';
import styles from './media-card-list.module.css';

export interface MediaCardListProps {
  title: string;
  children?: React.ReactNode;
}

export const MediaCardList = ({ title, children }: MediaCardListProps) => {
  const cards = Array.isArray(children)
    ? children
    : children
    ? [children]
    : [];
  return (
    <section className={styles.section}>
      <div className={styles.titleBarWrapper}>
        <div className={styles.titleBar}>
          <h2 className={styles.heading}>{title}</h2>
        </div>
      </div>
      <Stack flow="vertical-left" spaceInline="space060" list>
        {cards}
      </Stack>
    </section>
  );
};
