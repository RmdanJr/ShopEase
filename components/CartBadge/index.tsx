import Link from 'next/link';
import { IconShoppingCart } from '@tabler/icons';
import { Badge, Stack, useMantineTheme } from '@mantine/core';

export default function CartBadge() {
 const theme = useMantineTheme();

 return (
  <Link href="/cart" passHref style={{ textDecoration: 'none' }}>
   <Stack spacing={0}>
    <Badge variant="filled" color="red" size="sm" style={{ margin: '0 0 -2px 10px' }}>3</Badge>
    <IconShoppingCart style={{ color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[7] }} />
   </Stack>
  </Link>
 );
}
