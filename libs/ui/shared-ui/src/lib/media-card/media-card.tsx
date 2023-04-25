import { CardProps, Card, Headline, TextBlock, Stack } from 'newskit';
import Link from 'next/link';

export interface MediaCardProps extends CardProps {
  headline: string;
  children: string;
  href: string;
}

type MediaCardPropsWithOptionalHref = Omit<MediaCardProps, 'href'> & {
  href?: string;
};

const CardWrapped = ({
  children,
  headline,
  href,
}: MediaCardPropsWithOptionalHref) => (
  <Card
    layout="vertical"
    href={href ? { href: href, target: '_blank' } : undefined}
  >
    <Stack flow="vertical-left" spaceInline="space040">
      <Headline headingAs="h3">{headline}</Headline>
      <TextBlock typographyPreset="editorialParagraph020">{children}</TextBlock>
    </Stack>
  </Card>
);

export const MediaCard = ({ href, children, headline }: MediaCardProps) => (
  <Link href={href} passHref>
    <CardWrapped headline={headline}>{children}</CardWrapped>
  </Link>
);
