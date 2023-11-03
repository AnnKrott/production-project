import { type Meta, type StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import { DarkTheme } from 'shared/config/decorators/ThemeDecorator'

const meta = {
  title: 'Shared/Button',
  component: Button,
  args: {
    children: 'Login'
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const BaseLight: Story = {
  args: {
    theme: ThemeButton.BASE
  }
}

export const BaseDark: Story = {
  decorators: [DarkTheme],
  args: {
    theme: ThemeButton.BASE
  }
}

export const OutlineLight: Story = {
  args: {
    theme: ThemeButton.OUTLINE
  }
}

export const OutlineDark: Story = {
  decorators: [DarkTheme],
  args: {
    theme: ThemeButton.OUTLINE
  }
}
