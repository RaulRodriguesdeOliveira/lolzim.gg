import { Item, Items } from 'models/items'
import { StyledItems } from './style'
import { useSelector } from 'react-redux'
import { ApplicationState } from 'store'
import { GLOBAL } from 'store/modules/global/types'
import gold from '../../assets/images/gold.png'

interface Props {
  props: Item
}

function CardItem({ props }: Props) {
  const { version } = useSelector<ApplicationState, GLOBAL>(
    (state) => state.global
  )
  return (
    <StyledItems>
      <div className="items-container">
        <img
          className="item-photo"
          src={`https://ddragon.leagueoflegends.com/cdn/${version[0]}/img/item/${props.image.full}`}
          alt=""
        />
        <h3 className="item-name">{props.name.toUpperCase()}</h3>
        <p>-</p>
        {props.plaintext && <p>{props.plaintext}</p>}
        <img className="gold-photo" src={gold} alt="" />
        <p className="gold-price">{props.gold.base}</p>
      </div>
    </StyledItems>
  )
}

export default CardItem
