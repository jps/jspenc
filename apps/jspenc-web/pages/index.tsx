
import { MediaCard } from '@jspenc/ui/shared-ui';
import { Stack } from 'newskit';
import React from 'react';
import { writing } from '../content/writing'

export function Index() {
  return (
    <>
      <h1>James Spencer</h1>
      <p>
        Welcome to my corner of the internet, there&apos;s not much here at the moment
        but do feel free to browse some of my writing. or get in <a href="mailto:me@jspenc.com">contact.</a>
      </p>
      <h2>Projects</h2>
      <ul>
        <li>
          <a href="https://newskit.co.uk">
            NewsKit
          </a>
        </li>
        <li>
          <a href="https://www.moonpig.com">
            Moonpig
          </a>
        </li>
        <li>
          <a href="https://seetickets.com">
            See Tickets
          </a>
        </li>
      </ul>
      <h2>Writing</h2>
      <ul>
        <Stack flow="vertical-left" spaceInline="space050">
        {writing.map(({body, ...rest}) => {return { children:body, ...rest }}).map((article,i) => <MediaCard key={i} {...article} />)}
        </Stack>
      </ul>
    </>
  );
}

export default Index;
