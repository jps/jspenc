import { Stack } from 'newskit';

export const Footer = () => 
  <footer>
    <Stack flow="horizontal-center" stackDistribution="flex-end">
      James Spencer {new Date().getFullYear()} &copy;
    </Stack>
  </footer>