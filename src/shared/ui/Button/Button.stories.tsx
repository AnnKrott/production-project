import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'

const meta = {
  title: 'Shared/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BASE
  }
}

export const Secondary: Story = {
  args: {
    children: 'Text 2',
    theme: ThemeButton.OUTLINE
  }
}
