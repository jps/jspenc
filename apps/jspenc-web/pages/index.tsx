import { MediaCard, MediaCardList } from '@jspenc/ui/shared-ui';
import { Stack, TextBlock } from 'newskit';
import { writing } from '../content/writing';
import { projects } from '../content/projects';

const writingAsMediaCards = writing.map(({ href, headline, body }) => {
  return (
    <MediaCard key={href} href={href} headline={headline}>
      {body}
    </MediaCard>
  );
});

const projectsAsMediaCards = projects.map(({ href, headline, body }) => {
  return (
    <MediaCard key={href} href={href} headline={headline}>
      {body}
    </MediaCard>
  );
});

export function Index() {
  return (
    <Stack spaceInline="space060" flow="vertical-stretch">
      <TextBlock typographyPreset="utilityBody030" stylePreset="inkBase">
        Welcome to my corner of the internet, there&apos;s not much here at the
        moment but do feel free to browse some of my writing. or get in{' '}
        <a href="mailto:me@jspenc.com">contact.</a>
      </TextBlock>
      <MediaCardList title="Writing">{writingAsMediaCards}</MediaCardList>
      <MediaCardList title="Projects">{projectsAsMediaCards}</MediaCardList>
    </Stack>
  );
}

export default Index;
