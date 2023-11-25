import { type StateSchema } from 'app/provider/StoreProvider'
import { getLoginPassword } from './getLoginPassword'
import { type DeepPartial } from '@reduxjs/toolkit'

describe('getLoginPassword', () => {
  test('should return 123', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: '123'
      }
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('123')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})
