import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User/model/types/user'
import { type LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  login: LoginSchema
}
