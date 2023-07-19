import type { StoryObj, Meta } from '@storybook/react';

import Button from '@/components/FancyButton';

const meta: Meta<typeof Button> = {
  title: 'Components/FancyButton',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const FancyButton: Story = {
  args: {
    children: 'Short URL',
  },
};
