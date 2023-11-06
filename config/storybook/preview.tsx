import type { Preview, StoryFn } from '@storybook/react'
import './../../src/app/styles/index.scss'
import { LightTheme } from 'shared/config/storybook/ThemeDecorator'
import { BrowserRouter } from 'react-router-dom'
import React, { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18nForTests'
import { Theme, ThemeProvider } from 'app/provider/ThemeProvider'

const withI18next = (Story: StoryFn) => {
  return (
    <ThemeProvider initialTheme={Theme.LIGHT}>
      <Suspense fallback=''>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </Suspense>
    </ThemeProvider>
  )
}

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
      <Suspense fallback=''>
        <BrowserRouter>
            <Story/>
        </BrowserRouter>
      </Suspense>
    ),
    withI18next
  ]
}

export default preview
