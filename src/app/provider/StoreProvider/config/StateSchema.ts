import { type ReducersMapObject, type EnhancedStore, type AnyAction, type CombinedState, type Reducer } from '@reduxjs/toolkit'
import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User/model/types/user'
import { type LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // async reducers
  login?: LoginSchema
}

export type StateSchemaKeys = keyof StateSchema
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKeys, reducer: Reducer) => void
  remove: (key: StateSchemaKeys) => void
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager?: ReducerManager
}
