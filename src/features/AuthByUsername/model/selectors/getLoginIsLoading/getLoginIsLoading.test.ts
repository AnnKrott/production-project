import { type StateSchema } from 'app/provider/StoreProvider'
import { getLoginIsLoading } from './getLoginIsLoading'
import { type DeepPartial } from '@reduxjs/toolkit'

describe('getLoginIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true
      }
    }
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
  })
})
