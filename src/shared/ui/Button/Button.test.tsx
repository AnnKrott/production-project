import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'
import React from 'react'

describe('button', () => {
  test('test button', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('test button with base theme', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ThemeButton.BASE}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('base')
    screen.debug()
  })
})
