import { type Meta, type StoryObj } from '@storybook/react'
import { DarkTheme } from 'shared/config/decorators/ThemeDecorator'
import AboutPage from './AboutPage'

const meta = {
  title: 'Pages/AboutPage',
  component: AboutPage
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
}

export const Dark: Story = {
  decorators: [DarkTheme]
}
