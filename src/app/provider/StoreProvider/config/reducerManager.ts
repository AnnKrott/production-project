import { type AnyAction, combineReducers, type ReducersMapObject, type Reducer } from '@reduxjs/toolkit'
import { type StateSchemaKeys, type StateSchema, type ReducerManager } from './StateSchema'

export function createReducerManager (initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)
  let keysToRemove: StateSchemaKeys[] = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (const key of keysToRemove) {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete state[key]
        }
        keysToRemove = []
      }

      return combinedReducer(state, action)
    },

    add: (key: StateSchemaKeys, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },

    remove: (key: StateSchemaKeys) => {
      if (!key || !reducers[key]) {
        return
      }

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    }
  }
}
