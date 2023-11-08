import { type CounterSchema } from '../types/CounterSchema'
import { counterActions, counterReducer } from './CounterSlice'

describe('CounterSlice', () => {
  test('should increment value', () => {
    const state: CounterSchema = { value: 27 }

    expect(counterReducer(state, counterActions.increment()))
      .toEqual({ value: 28 })
  })

  test('should decrement value', () => {
    const state: CounterSchema = { value: 27 }

    expect(counterReducer(state, counterActions.decrement()))
      .toEqual({ value: 26 })
  })

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment()))
      .toEqual({ value: 1 })
  })
})
