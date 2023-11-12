import { type Meta, type StoryObj } from '@storybook/react'
import { DarkTheme } from 'shared/config/storybook/ThemeDecorator'
import { Text, TextTheme } from './Text'

const meta = {
  title: 'Shared/Text',
  component: Text
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Title',
    text: 'some Text that should describe the title'
  }
}

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    text: 'some Text that should describe the title'
  },
  decorators: [DarkTheme]
}

export const Error: Story = {
  args: {
    title: 'Title',
    text: 'some Text that should describe the title',
    theme: TextTheme.ERROR
  }
}

export const ErrorDark: Story = {
  args: {
    title: 'Title',
    text: 'some Text that should desccribe the title',
    theme: TextTheme.ERROR
  },
  decorators: [DarkTheme]
}

export const OnlyTitle: Story = {
  args: {
    title: 'Title'
  }
}

export const OnlyText: Story = {
  args: {
    text: 'some Text that should describe the title'
  }
}
