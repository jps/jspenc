import React from 'react';
import { TextBlock } from '../text-block/text-block';
import styles from './media-card.module.css';

export interface MediaCardProps {
  headline: string;
  children: React.ReactNode;
  href?: string;
}

const MediaCardHeadline = ({ children }: { children: React.ReactNode }) => (
  <section className={styles.headlineSection}>
    <h3 className={styles.headline}>{children}</h3>
  </section>
);

export const MediaCard = ({ headline, href, children }: MediaCardProps) => (
  <div className={styles.card}>
    <div className={styles.content}>
      {href ? (
        <a className={styles.cardLink} href={href}>
          <MediaCardHeadline>{headline}</MediaCardHeadline>
        </a>
      ) : (
        <MediaCardHeadline>{headline}</MediaCardHeadline>
      )}
      <TextBlock typographyPreset="editorialParagraph020">{children}</TextBlock>
    </div>
  </div>
);
