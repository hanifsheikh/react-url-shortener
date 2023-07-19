import type { StoryObj, Meta } from '@storybook/react';

import Input from '@/components/FancyInput';

const meta: Meta<typeof Input> = {
  title: 'Components/FancyInput',
  component: Input,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const FancyInput: Story = {};
