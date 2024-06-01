import { Reducer } from 'redux'
import { GLOBAL, TYPES } from './types'

const INITIAL_STATE: GLOBAL = {
  version: [],
  languages: [],
  selectLang: []
}

const reducer: Reducer<GLOBAL> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_VERSION_DATA:
      return {
        ...state,
        version: action.value
      }
    case TYPES.CLEAN_VERSION_DATA:
      return {
        ...state,
        version: INITIAL_STATE.version
      }
    case TYPES.SET_LANGUAGES_DATA:
      return {
        ...state,
        languages: action.value
      }
    case TYPES.CLEAN_LANGUAGES_DATA:
      return {
        ...state,
        languages: INITIAL_STATE.languages
      }
    case TYPES.SET_SELECTLANG_DATA:
      return {
        ...state,
        selectLang: action.value
      }
    case TYPES.CLEAN_SELECTLANG_DATA:
      return {
        ...state,
        selectLang: INITIAL_STATE.selectLang
      }
    default:
      return { ...state }
  }
}

export default reducer
