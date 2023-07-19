import type { StoryObj, Meta } from '@storybook/react';

import Page from '@/pages/Entry';

const meta: Meta<typeof Page> = {
  title: 'Pages/Entry',
  component: Page,
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Entry: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
