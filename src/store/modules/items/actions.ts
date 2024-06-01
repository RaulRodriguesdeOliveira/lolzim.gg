import { Items } from 'models/items'
import store from 'store'
import { TYPES } from './types'

export const setItemsData = (value: Items[]) =>
  store.dispatch({
    type: TYPES.SET_TYPES_DATA,
    value
  })

export const cleanItemsData = () =>
  store.dispatch({
    type: TYPES.CLEAN_TYPES_DATA
  })
