import type { StoryObj, Meta } from '@storybook/react';

import Page from './Edit';

const meta: Meta<typeof Page> = {
  title: 'Pages/Edit',
  component: Page,
  args: {
    id: 1,
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Edit: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
