import { Group, useMantineTheme } from '@mantine/core';
import SideBar from '../components/SideBar';
import ColorSchemeToggle from '../components/ColorSchemeToggle';

export default function HomePage() {
  const theme = useMantineTheme();

  return (
    <Group style={{ backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[0] : '' }}>
      <SideBar />
      <ColorSchemeToggle />
    </Group>
  );
}
