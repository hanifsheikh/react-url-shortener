import type { StoryObj, Meta } from '@storybook/react';

import Page from './List';

const meta: Meta<typeof Page> = {
  title: 'Pages/List',
  component: Page,
  args: {
    entries: [
      {
        id: 1,
        short_url: 'https://short.ly/8zJDistA',
        original_url: 'https://github.com/foyzulkarim/mock-interviews-2023/blob/main/01-junior-react-dev.md',
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const List: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
