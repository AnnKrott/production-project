import { type StateSchema } from 'app/provider/StoreProvider'
import { getLoginUsername } from './getLoginUsername'
import { type DeepPartial } from '@reduxjs/toolkit'

describe('getLoginUsername', () => {
  test('should return user', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'user'
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('user')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
