import { combineReducers } from 'redux'
import champions from './champions'
import detailsChampion from './detailsChampion'
import itemsData from './items'
import global from './global'

export default combineReducers({
  champions,
  detailsChampion,
  itemsData,
  global
})
