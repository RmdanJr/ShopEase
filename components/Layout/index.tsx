import React, { ReactNode } from 'react';
import { Group, useMantineTheme } from '@mantine/core';
import SideBar from '../SideBar';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
 const theme = useMantineTheme();

 return (
  <Group style={{ backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[0] : theme.colors.dark[7] }}>
   <SideBar />
   {children}
  </Group>);
};

export default Layout;
