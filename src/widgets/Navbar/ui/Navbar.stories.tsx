import { type Meta, type StoryObj } from '@storybook/react'
import { DarkTheme } from 'shared/config/decorators/ThemeDecorator'
import { Navbar } from './Navbar'

const meta = {
  title: 'Widgets/Navbar',
  component: Navbar
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
}

export const Dark: Story = {
  decorators: [DarkTheme]
}
