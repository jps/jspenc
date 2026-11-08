import { Stack } from '../stack/stack';
import { TextBlock } from '../text-block/text-block';
import styles from './footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.dividerBlock}>
      <hr className={styles.divider} />
    </div>
    <Stack flow="horizontal-center" stackDistribution="flex-end">
      <TextBlock typographyPreset="utilityBody010" stylePreset="inkBase">
        James Spencer {new Date().getFullYear()} &copy;
      </TextBlock>
    </Stack>
  </footer>
);
