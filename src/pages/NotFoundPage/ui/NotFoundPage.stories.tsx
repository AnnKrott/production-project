import { type Meta, type StoryObj } from '@storybook/react'
import { DarkTheme } from 'shared/config/decorators/ThemeDecorator'
import { NotFoundPage } from './NotFoundPage'

const meta = {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
}

export const Dark: Story = {
  decorators: [DarkTheme]
}
