import { type Meta, type StoryObj } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'
import { DarkTheme } from 'shared/config/storybook/ThemeDecorator'

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
    theme: ButtonTheme.BASE
  }
}

export const BaseDark: Story = {
  decorators: [DarkTheme],
  args: {
    theme: ButtonTheme.BASE
  }
}

export const OutlineLight: Story = {
  args: {
    theme: ButtonTheme.OUTLINE
  }
}

export const OutlineLightSizeL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  }
}

export const OutlineLightSizeXL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  }
}

export const Background: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND
  }
}

export const BackgroundInverted: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const SquareSizeM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M
  }
}

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  }
}

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
  }
}
