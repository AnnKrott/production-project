import { type Meta, type StoryObj } from '@storybook/react'
import { DarkTheme } from 'shared/config/storybook/ThemeDecorator'
import MainPage from './MainPage'

const meta = {
  title: 'Pages/MainPage',
  component: MainPage
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
}

export const Dark: Story = {
  decorators: [DarkTheme]
}
