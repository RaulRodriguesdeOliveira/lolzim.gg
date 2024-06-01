import { Item, Items } from 'models/items'

export enum TYPES {
  SET_TYPES_DATA = 'SET_TYPES_DATA',
  CLEAN_TYPES_DATA = 'CLEAN_TYPES_DATA'
}

export interface ITEMS_DATA {
  itemsData: Item[]
}
