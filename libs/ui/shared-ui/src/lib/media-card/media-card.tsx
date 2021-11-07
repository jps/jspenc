import { CardProps, Card, Headline, TextBlock, Stack } from 'newskit';
import Link from 'next/link';
import {BaseProvider} from '../base-provider/base-provider';

export interface MediaCardProps extends CardProps {
  headline: string,
  children: string,
  href: string,
}

export const MediaCard = ({href, children, headline}: MediaCardProps) =>
    <BaseProvider>
    <Link href={href} passHref>
      <Card layout='vertical'>
        <Stack flow="vertical-left" spaceInline="space030">
          <Headline headingAs="h3">{headline}</Headline>
          <TextBlock>{children}</TextBlock>
        </Stack>
      </Card>
    </Link>
    </BaseProvider>;

export default MediaCard;