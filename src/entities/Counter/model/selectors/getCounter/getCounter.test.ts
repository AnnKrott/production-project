import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/provider/StoreProvider'
import { getCounter } from './getCounter'

describe('getCounter', () => {
  test('should return counter state', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 27
      }
    }

    expect(getCounter(state as StateSchema)).toEqual({ value: 27 })
  })
})
