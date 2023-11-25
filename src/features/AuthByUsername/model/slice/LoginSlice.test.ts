import { type DeepPartial } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/LoginSchema'
import { loginActions, loginReducer } from './LoginSlice'

describe('loginSlice', () => {
  test('set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'user' }
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('John')
    ))
      .toEqual({ username: 'John' })
  })

  test('set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' }
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('qwerty')
    ))
      .toEqual({ password: 'qwerty' })
  })
})
