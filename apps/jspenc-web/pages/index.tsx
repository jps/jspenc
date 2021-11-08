import { MediaCardList } from '@jspenc/ui/shared-ui';
import { Cell, TextBlock } from 'newskit';
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
    <>
      <Cell xs={12}>
        <TextBlock typographyPreset="editorialDisplay010">
          James Spencer
        </TextBlock>
      </Cell>
      <Cell xs={12}>
        <TextBlock typographyPreset="utilityBody030">
          Welcome to my corner of the internet, there&apos;s not much here at
          the moment but do feel free to browse some of my writing. or get in{' '}
          <a href="mailto:me@jspenc.com">contact.</a>
        </TextBlock>
      </Cell>
      <Cell xs={12}>
        <MediaCardList title="Writing" cards={writingAsMediaCardData} />
      </Cell>
      <Cell xs={12}>
        <MediaCardList title="Projects" cards={projectsAsMediaCardData} />
      </Cell>
    </>
  );
}

export default Index;
