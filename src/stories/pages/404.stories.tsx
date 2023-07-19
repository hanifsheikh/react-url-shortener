import type { StoryObj, Meta } from '@storybook/react';

import Page from '@/pages/NotFound';

const meta: Meta<typeof Page> = {
  title: 'Pages/Page404',
  component: Page,
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Page404: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
