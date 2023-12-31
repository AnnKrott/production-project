import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true
}

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  }
})

export const { actions: profileActions } = ProfileSlice
export const { reducer: profileReducer } = ProfileSlice
