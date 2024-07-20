import { TYPES } from './types'
import store from 'store'

export const setVersionData = (value: string[]) =>
  store.dispatch({
    type: TYPES.SET_VERSION_DATA,
    value
  })

export const cleanVersionData = () =>
  store.dispatch({
    type: TYPES.CLEAN_VERSION_DATA
  })

export const setSelectVersionData = (value: string) =>
  store.dispatch({
    type: TYPES.SET_SELECTVERSION_DATA,
    value
  })

export const cleanSelectVersionData = () =>
  store.dispatch({
    type: TYPES.CLEAN_SELECTVERSION_DATA
  })

export const setLanguageData = (value: string[]) =>
  store.dispatch({
    type: TYPES.SET_LANGUAGES_DATA,
    value
  })

export const cleanLanguageData = () =>
  store.dispatch({
    type: TYPES.CLEAN_LANGUAGES_DATA
  })

export const setSelectLangData = (value: string) =>
  store.dispatch({
    type: TYPES.SET_SELECTLANG_DATA,
    value
  })

export const cleanSelectLangData = () =>
  store.dispatch({
    type: TYPES.CLEAN_SELECTLANG_DATA
  })
