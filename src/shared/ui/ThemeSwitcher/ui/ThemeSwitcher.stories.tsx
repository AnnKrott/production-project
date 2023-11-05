import { type Meta, type StoryObj } from '@storybook/react'
import { DarkTheme } from 'shared/config/storybook/ThemeDecorator'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta = {
  title: 'Shared/ThemeSwitcher',
  component: ThemeSwitcher
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
}

export const Dark: Story = {
  decorators: [DarkTheme]
}
