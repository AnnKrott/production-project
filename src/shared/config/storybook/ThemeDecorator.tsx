import { type StoryFn } from '@storybook/react'

export const LightTheme = (Story: StoryFn) => (
        <div className='app app__light-theme'>
            <Story />
        </div>
)

export const DarkTheme = (Story: StoryFn) => (
        <div className='app app__dark-theme'>
            <Story />
        </div>
)
