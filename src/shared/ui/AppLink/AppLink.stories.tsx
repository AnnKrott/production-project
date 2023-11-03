import { type Meta, type StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import { DarkTheme } from 'shared/config/decorators/ThemeDecorator'

const meta = {
  title: 'Shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
    children: 'Link'
  }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  }
}

export const InvertedLight: Story = {
  args: {
    theme: AppLinkTheme.INVERTED
  }
}

export const RedLight: Story = {
  args: {
    theme: AppLinkTheme.RED
  }
}

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  },
  decorators: [DarkTheme]
}

export const InvertedDark: Story = {
  args: {
    theme: AppLinkTheme.INVERTED
  },
  decorators: [DarkTheme]
}

export const RedDark: Story = {
  args: {
    theme: AppLinkTheme.RED
  },
  decorators: [DarkTheme]
}
