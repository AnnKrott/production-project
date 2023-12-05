import { type Meta, type StoryObj } from '@storybook/react'
import { DarkTheme } from 'shared/config/storybook/ThemeDecorator'
import ProfilePage from './ProfilePage'

const meta = {
  title: 'Pages/ProfilePage',
  component: ProfilePage
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
}

export const Dark: Story = {
  decorators: [DarkTheme]
}
