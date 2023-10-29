import Link from 'next/link';
import { IconHistory, IconList, IconReportAnalytics } from '@tabler/icons';
import { Stack, useMantineTheme } from '@mantine/core';

export default function NavigationList() {
 const theme = useMantineTheme();

 const iconsStyles = { color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[7] };

 return (
  <Stack spacing={60}>
   <Link href="/items" passHref>
    <IconList style={iconsStyles} />
   </Link>
   <Link href="/history" passHref>
    <IconHistory style={iconsStyles} />
   </Link>
   <Link href="/statistics" passHref>
    <IconReportAnalytics style={iconsStyles} />
   </Link>
  </Stack>
 );
}
