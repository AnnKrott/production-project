import { type Meta, type StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'
import { DarkTheme } from 'shared/config/storybook/ThemeDecorator'

const meta = {
  title: 'Feature/LoginForm',
  component: LoginForm
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
}

export const Dark: Story = {
  decorators: [DarkTheme]
}
