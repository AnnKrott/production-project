import type { Preview, StoryFn } from '@storybook/react'
import './../../src/app/styles/index.scss'
import { LightTheme } from 'shared/config/storybook/ThemeDecorator'
import { BrowserRouter } from 'react-router-dom'
import React, { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18nForTests'
import { Theme, ThemeProvider } from 'app/provider/ThemeProvider'
import { StoreProvider } from 'app/provider/StoreProvider'

const withI18next = (Story: StoryFn) => {
  return (
    <Suspense fallback=''>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
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
      <StoreProvider>
        <Suspense fallback=''>
          <BrowserRouter>
            <Story/>
          </BrowserRouter>
        </Suspense>
      </StoreProvider>
    ),
    withI18next
  ]
}

export default preview
