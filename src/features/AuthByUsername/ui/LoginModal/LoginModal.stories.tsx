import { type Meta, type StoryObj } from '@storybook/react'
import { LoginModal } from './LoginModal'
import { Theme, ThemeProvider } from 'app/provider/ThemeProvider'

const meta = {
  title: 'Shared/LoginModal',
  component: LoginModal,
  args: {
    isOpen: true
  }
} satisfies Meta<typeof LoginModal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
}

export const Dark: Story = {
  args: {
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={Theme.DARK}>
        <Story/>
      </ThemeProvider>
    )
  ]
}
