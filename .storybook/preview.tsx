import React from 'react';
import type { Preview } from '@storybook/react';

import '../src/styles/tailwind.css';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },

    controls: {
      matchers: {
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: 'linear-gradient(90deg, rgba(250,250,250,1) 0%, rgba(226,226,226,1) 100%)' }],
    },
  },
  decorators: [
    (Story) => (
      <div className="container mx-auto text-center text-grey py-5">
        <Story />
      </div>
    ),
  ],
};

export default preview;
