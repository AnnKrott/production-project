import axios from 'axios'
import { LoginByUsername } from './LoginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

describe('LoginByUsername', () => {
  test('success login', async () => {
    const userValue = { id: '1', username: 'user', password: '123' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const thunk = new TestAsyncThunk(LoginByUsername)
    const result = await thunk.callThunk({ username: 'user', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const thunk = new TestAsyncThunk(LoginByUsername)
    const result = await thunk.callThunk({ username: 'user', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
