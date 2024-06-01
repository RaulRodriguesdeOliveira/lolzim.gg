import { createStore, Store } from 'redux'
import rootReducer from './modules/rootReducer'
import { CHAMPIONS } from './modules/champions/types'
import { DETAILS_CHAMPION } from './modules/detailsChampion/types'
import { ITEMS_DATA } from './modules/items/types'
import { GLOBAL } from './modules/global/types'

export interface ApplicationState {
  champions: CHAMPIONS
  detailsChampion: DETAILS_CHAMPION
  itemsData: ITEMS_DATA
  global: GLOBAL
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store
