import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/provider/StoreProvider'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 27
      }
    }

    expect(getCounterValue(state as StateSchema)).toEqual(27)
  })
})
