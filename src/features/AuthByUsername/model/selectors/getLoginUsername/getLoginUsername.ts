import { type StateSchema } from 'app/provider/StoreProvider'

export const getLoginUsername = (state: StateSchema) => state?.login?.username || ''
