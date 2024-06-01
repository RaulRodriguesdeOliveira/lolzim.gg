import axios from 'axios'
import CardItem from 'components/CardItem'
import NavBar from 'components/NavBar/NavBar'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ApplicationState } from 'store'
import { GLOBAL } from 'store/modules/global/types'
import { setItemsData } from 'store/modules/items/actions'
import { ITEMS_DATA } from 'store/modules/items/types'
import DetailsChampion from 'views/detailsChampion'
import { BodyItems } from './style'

function ItemsData() {
  useEffect(() => {
    getItems()
  }, [])
  const { itemsData: itemsState } = useSelector<ApplicationState, ITEMS_DATA>(
    (state) => state.itemsData
  )
  // const { version, selectLang } = useSelector<ApplicationState, GLOBAL>(
  //   (state) => state.global
  // )

  async function getItems() {
    axios
      .get(
        `https://ddragon.leagueoflegends.com/cdn/14.11.1/data/pt_BR/item.json`
      )
      .then((response) => {
        const itemsData = []
        for (const key in response.data.data) {
          itemsData.push(response.data.data[key])
        }
        setItemsData(itemsData)
      })
  }
  return (
    <BodyItems>
      <div className="body-container">
        <NavBar />
        <div className="items">
          {itemsState.map((item, i) => {
            return <CardItem key={i} props={item} />
          })}
        </div>
      </div>
    </BodyItems>
  )
}

export default ItemsData
