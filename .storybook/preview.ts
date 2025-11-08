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
  },
};

export default preview;