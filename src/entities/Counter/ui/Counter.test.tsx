import { fireEvent, screen } from '@testing-library/react'
import { Counter } from './Counter'
import { componentRender } from 'shared/config/tests/componentRender'

describe('Counter', () => {
  test('test render', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 27 }
      }
    })

    expect(screen.getByTestId('value-title')).toHaveTextContent('27')
  })

  test('test incrementing', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 27 }
      }
    })
    fireEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('28')
  })

  test('test decrementing', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 27 }
      }
    })
    fireEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('26')
  })
})
