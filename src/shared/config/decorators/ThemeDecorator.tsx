import { type StoryFn } from '@storybook/react'

export const LightTheme = (Story: StoryFn) => (
        <div className='app light'>
            <Story />
        </div>
)

export const DarkTheme = (Story: StoryFn) => (
        <div className='app dark'>
            <Story />
        </div>
)
