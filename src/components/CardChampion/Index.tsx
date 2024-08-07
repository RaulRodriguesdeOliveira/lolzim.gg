import { ChampionData } from 'models/champion'
import { Card } from './style'
import { Link } from 'react-router-dom'

interface Props {
  props: ChampionData
}

function CardChampion({ props }: Props) {
  return (
    <Card>
      <div className="body">
        <Link to={`${props.id}`}>
          <span className="champ-img">
            <img
              alt={props.title}
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.id}_0.jpg`}
            />
          </span>
          <span>
            <div className="champ-name">{props.name}</div>
          </span>
        </Link>
      </div>
    </Card>
  )
}

export default CardChampion
