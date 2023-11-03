import type { Preview } from '@storybook/react'
import './../../src/app/styles/index.scss'
import { LightTheme } from 'shared/config/decorators/ThemeDecorator'
import { BrowserRouter } from 'react-router-dom'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [LightTheme,
    (Story) => (
    <BrowserRouter>
      <Story/>
    </BrowserRouter>
    )
  ]
}

export default preview
