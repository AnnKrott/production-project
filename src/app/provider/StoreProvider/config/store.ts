import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'

export function CreateReduxStore (initialState: StateSchema) {
  const rootReducer: ReducersMapObject = {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer
  }

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
