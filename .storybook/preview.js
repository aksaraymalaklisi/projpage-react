/** @type { import('@storybook/react').Preview } */
import { MemoryRouter } from 'react-router-dom';
import GlobalStyle from '../src/components/GlobalStyle';

const preview = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <GlobalStyle />
        <Story />
      </MemoryRouter>
    ),
  ],
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
