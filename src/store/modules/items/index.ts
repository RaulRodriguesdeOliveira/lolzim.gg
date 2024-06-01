import { Reducer } from 'redux'
import { ITEMS_DATA, TYPES } from './types'

const INITIAL_STATE: ITEMS_DATA = {
  itemsData: []
}

const reducer: Reducer<ITEMS_DATA> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_TYPES_DATA:
      return {
        ...state,
        itemsData: action.value
      }
    case TYPES.CLEAN_TYPES_DATA:
      return {
        ...state,
        itemsData: INITIAL_STATE.itemsData
      }
    default:
      return state
  }
}

export default reducer
