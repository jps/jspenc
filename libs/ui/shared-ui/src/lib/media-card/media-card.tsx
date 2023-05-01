import {
  CardProps,
  Headline,
  TextBlock,
  CardComposable,
  CardContent,
  CardLink,
} from 'newskit';
import React from 'react';

export interface MediaCardProps extends CardProps {
  headline: string;
  children: string;
  href: string;
}

type MediaCardPropsWithOptionalHref = Omit<MediaCardProps, 'href'> & {
  href?: string;
};

const MediaCardHeadline = ({ children }: { children: React.ReactNode }) => (
  <Headline
    headingAs="h3"
    overrides={{
      typographyPreset: {
        xs: 'editorialHeadline030',
        sm: 'editorialHeadline030',
        md: 'editorialHeadline040',
        lg: 'editorialHeadline050',
      },
    }}
  >
    {children}
  </Headline>
);

export const MediaCard = ({
  headline,
  href,
  children,
}: MediaCardPropsWithOptionalHref) => (
  <CardComposable rowGap={'space040'}>
    <CardContent rowGap={'space040'}>
      {href ? (
        <CardLink expand href={href} textOnly external={false}>
          <MediaCardHeadline>{headline}</MediaCardHeadline>
        </CardLink>
      ) : (
        <MediaCardHeadline>{headline}</MediaCardHeadline>
      )}
      <TextBlock typographyPreset="editorialParagraph020">{children}</TextBlock>
    </CardContent>
  </CardComposable>
);
