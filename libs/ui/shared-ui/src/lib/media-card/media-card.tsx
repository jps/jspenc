import { CardProps, Card, Headline, TextBlock, Stack } from 'newskit';
import Link from 'next/link';

export interface MediaCardProps extends CardProps {
  headline: string;
  children: string;
  href: string;
}

export const MediaCard = ({ href, children, headline }: MediaCardProps) => (
  <Link href={href} passHref>
    <Card layout="vertical">
      <Stack flow="vertical-left" spaceInline="space030">
        <Headline headingAs="h3">{headline}</Headline>
        <TextBlock typographyPreset="editorialParagraph020">{children}</TextBlock>
      </Stack>
    </Card>
  </Link>
);

export default MediaCard;
