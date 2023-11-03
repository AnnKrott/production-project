import { type Meta, type StoryObj } from '@storybook/react'
import { DarkTheme } from 'shared/config/decorators/ThemeDecorator'
import { Sidebar } from './Sidebar'

const meta = {
  title: 'Widgets/Sidebar',
  component: Sidebar
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
}

export const Dark: Story = {
  decorators: [DarkTheme]
}
