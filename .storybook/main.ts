import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal: async (config) => {
    // Suppress all SCSS deprecation warnings
    if (config.css?.preprocessorOptions) {
      config.css.preprocessorOptions.scss = {
        ...config.css.preprocessorOptions.scss,
        quietDeps: true,
        silenceDeprecations: ['import', 'global-builtin'],
      };
    } else {
      config.css = {
        ...config.css,
        preprocessorOptions: {
          scss: {
            quietDeps: true,
            silenceDeprecations: ['import', 'global-builtin'],
          },
        },
      };
    }
    return config;
  },
};
export default config;