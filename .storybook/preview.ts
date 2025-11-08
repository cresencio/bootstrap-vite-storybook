import type { Preview } from '@storybook/react-vite'
import '../src/styles/bootstrap-custom.scss'
// Import Bootstrap JS so data-bs attributes work in Storybook
import 'bootstrap/dist/js/bootstrap.bundle'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Set the initial theme
      current: 'light',
      // Apply theme class to body
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
    },
  },
};

export default preview;