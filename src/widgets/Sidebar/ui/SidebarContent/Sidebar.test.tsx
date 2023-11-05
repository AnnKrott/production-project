import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import React from 'react'
import { componentRender } from 'shared/config/tests/componentRender'

describe('sidebar', () => {
  test('test sidebar', () => {
    componentRender(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('test toggle', () => {
    componentRender(<Sidebar/>)
    const toggleButton = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
