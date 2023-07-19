import type { StoryObj, Meta } from '@storybook/react';

import Table from './FancyTable';

const meta: Meta<typeof Table> = {
  title: 'Components/FancyTable',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    rows: { control: 'array' },
  },
};
export default meta;
type Story = StoryObj<typeof Table>;

export const FancyTable: Story = {
  args: {
    rows: [
      { id: 2, short_url: 'https://short.ly/FliLr2vwLI', original_url: 'https://github.com/foyzulkarim/mock-interviews-2023/blob/main/01-junior-react-dev.md' },
      { id: 1, short_url: 'https://short.ly/lvY2sQi7eZ', original_url: 'https://www.linkedin.com/posts/sumitanalyzen_learnwithsumit-mockinterview-activity-7084152322951426048-oDUg?utm_source=share&utm_medium=member_desktop' },
    ],
  },
};
