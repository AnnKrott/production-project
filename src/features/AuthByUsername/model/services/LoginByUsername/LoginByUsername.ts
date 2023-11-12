import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { userActions } from 'entities/User'
import { type User } from 'entities/User/model/types/user'
import i18next from 'i18next'
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const LoginByUsername = createAsyncThunk <User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData)

      if (!response.data) {
        throw new Error()
      }

      thunkAPI.dispatch(userActions.setAuthData(response.data))
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))

      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(i18next.t('Incorrect login or password'))
    }
  }
)
