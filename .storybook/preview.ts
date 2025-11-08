import type { Preview } from '@storybook/react-vite'
import '../src/styles/bootstrap-custom.scss'
// Import Bootstrap JS so data-bs attributes work in Storybook
import 'bootstrap/dist/js/bootstrap.bundle'
import React, { useEffect } from 'react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      
      useEffect(() => {
        const body = document.body;
        body.classList.remove('light', 'dark');
        body.classList.add(theme);
        body.setAttribute('data-theme', theme);
      }, [theme]);

      return React.createElement(Story);
    },
  ],
};

export default preview;