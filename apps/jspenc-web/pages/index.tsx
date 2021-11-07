import { MediaCard } from '@jspenc/ui/shared-ui';
import { Block, Cell, Stack, TextBlock, TitleBar } from 'newskit';
import React from 'react';
import { writing } from '../content/writing';

const writingAsMediaCardData = writing.map(({ body, ...rest }) => {
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
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="https://newskit.co.uk">NewsKit</a>
          </li>
          <li>
            <a href="https://www.moonpig.com">Moonpig</a>
          </li>
          <li>
            <a href="https://seetickets.com">See Tickets</a>
          </li>
        </ul>
      </Cell>
      <Cell xs={12}>
        <Block spaceStack="space060">
          <TitleBar headingAs="h2">Writing</TitleBar>
        </Block>
        <Stack flow="vertical-left" spaceInline="space050" list>
          {writingAsMediaCardData.map((article, i) => (
            <MediaCard key={i} {...article} />
          ))}
        </Stack>
      </Cell>
    </>
  );
}

export default Index;
