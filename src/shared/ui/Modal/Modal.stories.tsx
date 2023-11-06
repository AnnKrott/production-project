import { type Meta, type StoryObj } from '@storybook/react'
import { DarkTheme } from 'shared/config/storybook/ThemeDecorator'
import { Modal } from './Modal'

const meta = {
  title: 'Shared/Modal',
  component: Modal,
  args: {
    children: 'Lorem ipsum dolar',
    isOpen: true
  }
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
}

export const Dark: Story = {
  decorators: [DarkTheme]
}
