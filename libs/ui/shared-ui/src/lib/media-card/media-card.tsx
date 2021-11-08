import { CardProps, Card, Headline, TextBlock, Stack } from 'newskit';
import Link from 'next/link';
import { forwardRef } from 'react';

export interface MediaCardProps extends CardProps {
  headline: string;
  children: string;
  href: string;
}

type MediaCardPropsWithOptionalHref = Omit<MediaCardProps, 'href'> & {
  href?: string;
};

//TODO: big dirty hack, thanks for this next.js... https://github.com/vercel/next.js/issues/7915
const CardWrapped = forwardRef<any, MediaCardPropsWithOptionalHref>(
  ({ children, headline, href }, ref) => (
    <div ref={ref}>
      <Card layout="vertical" href={href}>
        <Stack flow="vertical-left" spaceInline="space040">
          <Headline headingAs="h3">{headline}</Headline>
          <TextBlock typographyPreset="editorialParagraph020">
            {children}
          </TextBlock>
        </Stack>
      </Card>
    </div>
  )
);

export const MediaCard = ({ href, children, headline }: MediaCardProps) => (
  <Link href={href} passHref>
    <CardWrapped headline={headline}>{children}</CardWrapped>
  </Link>
);
