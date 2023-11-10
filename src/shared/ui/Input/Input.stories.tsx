import { type Meta, type StoryObj } from '@storybook/react'
import { Input } from './Input'
import { DarkTheme } from 'shared/config/storybook/ThemeDecorator'

const meta = {
  title: 'Shared/Input',
  component: Input,
  args: {
    placeholder: 'Login',
    type: 'text'
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
}

export const Dark: Story = {
  decorators: [DarkTheme]
}
