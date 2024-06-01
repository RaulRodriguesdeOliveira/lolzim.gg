import { InfoChampion } from 'models/champion'
import store from '../..'
import { TYPES } from './types'

export const setDetailsChampion = (value: InfoChampion) =>
  store.dispatch({
    type: TYPES.SET_DETAILS_CHAMPION,
    value,
    teste: 1
  })

export const cleanDetailsChampion = () =>
  store.dispatch({
    type: TYPES.CLEAN_DETAILS_CHAMPION
  })
