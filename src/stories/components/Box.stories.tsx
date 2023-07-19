import type { StoryObj, Meta } from '@storybook/react';

import Box from '@/components/ShortenedURLBox';

const meta: Meta<typeof Box> = {
  title: 'Components/ShortenedURLBox',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    url: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof Box>;

export const ShortenedURLBox: Story = {
  args: {
    title: 'Shortened URL',
    url: 'https://short.ly/R4ND0MSTR',
  },
};
