import { type Meta, type StoryObj } from '@storybook/react'
import { DarkTheme } from 'shared/config/decorators/ThemeDecorator'
import { Loader } from './Loader'

const meta = {
  title: 'Shared/Loader',
  component: Loader
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
}

export const Dark: Story = {
  decorators: [DarkTheme]
}
