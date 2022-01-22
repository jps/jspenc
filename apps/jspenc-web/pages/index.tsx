import { MediaCardList } from '@jspenc/ui/shared-ui';
import { Stack, StackChild, TextBlock } from 'newskit';
import React from 'react';
import { projects } from '../content';
import { writing } from '../content/writing';

const writingAsMediaCardData = writing.map(({ body, ...rest }) => {
  return { children: body, ...rest };
});

const projectsAsMediaCardData = projects.map(({ body, ...rest }) => {
  return { children: body, ...rest };
});

export function Index() {
  return (   
    <Stack spaceInline="space060" flow="vertical-stretch">
      <StackChild  />
      <TextBlock typographyPreset="utilityBody030" stylePreset="inkBase">
          Welcome to my corner of the internet, there&apos;s not much here at
          the moment but do feel free to browse some of my writing. or get in{' '}
          <a href="mailto:me@jspenc.com">contact.</a>
      </TextBlock>
      <MediaCardList title="Writing" cards={writingAsMediaCardData} />
      <MediaCardList title="Projects" cards={projectsAsMediaCardData} />      
    </Stack>
  );
}

export default Index;
