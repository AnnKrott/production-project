import { type Reducer } from '@reduxjs/toolkit'
import { type ReduxStoreWithManager } from 'app/provider/StoreProvider'
import { type StateSchemaKeys } from 'app/provider/StoreProvider/config/StateSchema'
import { type FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type reducersList = {
  [keyName in StateSchemaKeys]?: Reducer
}

type reducersListEntries = [StateSchemaKeys, Reducer]

interface DynamicModuleLoaderProps {
  reducers: reducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    reducers,
    removeAfterUnmount = true,
    children
  } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([keyName, reducer]: reducersListEntries) => {
      store.reducerManager.add(keyName, reducer)
      dispatch({ type: `@INIT ${keyName} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([keyName, reducer]: reducersListEntries) => {
          store.reducerManager.remove(keyName)
          dispatch({ type: `@DESTROY ${keyName} reducer` })
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      { children }
    </>
  )
}
