import { type StoryFn } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/provider/ThemeProvider'

export const LightTheme = (Story: StoryFn) => (
    <div className='app app__light-theme'>
        <ThemeProvider initialTheme={Theme.LIGHT}>
            <Story />
        </ThemeProvider>
    </div>
)

export const DarkTheme = (Story: StoryFn) => (
    <div className='app app__dark-theme'>
        <ThemeProvider initialTheme={Theme.DARK}>
            <Story/>
        </ThemeProvider>
    </div>
)
