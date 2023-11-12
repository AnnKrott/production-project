import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage'

const initialState: UserSchema = {}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
      if (user) {
        state.authData = JSON.parse(user)
      }
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    }
  }
})

export const { actions: userActions } = UserSlice
export const { reducer: userReducer } = UserSlice
