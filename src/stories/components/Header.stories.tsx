import type { StoryObj, Meta } from '@storybook/react';

import AppHeader from './Header';

const meta: Meta<typeof AppHeader> = {
  title: 'Components/Header',
  component: AppHeader,
};
export default meta;
type Story = StoryObj<typeof AppHeader>;

export const Header: Story = {};
