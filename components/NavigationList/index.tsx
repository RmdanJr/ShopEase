import Link from 'next/link';
import { IconHistory, IconList, IconReportAnalytics } from '@tabler/icons';
import { Stack, useMantineTheme } from '@mantine/core';
import ColorSchemeToggle from '../ColorSchemeToggle';

export default function NavigationList() {
 const theme = useMantineTheme();

 const iconsStyles = { color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[7] };

 return (
  <Stack style={{ height: 400, justifyContent: 'space-evenly', alignItems: 'center' }}>
   <ColorSchemeToggle />
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
