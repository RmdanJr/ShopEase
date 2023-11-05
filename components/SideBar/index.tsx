import { Stack } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import NavigationList from '../NavigationList';
import CartBadge from '../CartBadge';

export default function SideBar() {
 return (
  <Stack className={styles.sidebar} sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white })}>
   <Link href="/items" passHref>
    <Image src="/logo.svg" width={40} height={40} alt="ShopEase Logo" />
   </Link>
   <NavigationList />
   <CartBadge />
  </Stack>
 );
}
