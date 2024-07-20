import axios from 'axios'
import CardChampion from 'components/CardChampion'
import NavBar from 'components/NavBar/NavBar'
import { ChampionData } from 'models/champion'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ApplicationState } from 'store'
import { setChampionsData } from 'store/modules/champions/actions'
import { CHAMPIONS } from 'store/modules/champions/types'
import { StyledBody } from './style'
import { GLOBAL } from 'store/modules/global/types'
import { setVersionData } from 'store/modules/global/actions'

function Champions() {
  const { champions: championsState } = useSelector<
    ApplicationState,
    CHAMPIONS
  >((state) => state.champions)

  const { selectLang, selectVersion } = useSelector<ApplicationState, GLOBAL>(
    (state) => state.global
  )

  useEffect(() => {
    getChampions()
  }, [selectLang, selectVersion])

  // const [champions, setChampions] = useState<ChampionData[]>([])

  async function getChampions() {
    axios
      .get(
        `http://ddragon.leagueoflegends.com/cdn/${selectVersion}/data/${selectLang}/champion.json`
      )
      .then((response) => {
        const championsData = []
        for (const key in response.data.data) {
          championsData.push(response.data.data[key])
        }
        setChampionsData(championsData)
        console.log(response)
      })
  }
  return (
    <StyledBody>
      <div className="body-container">
        <NavBar />
        <div className="container-xxl">
          <div className="row d-flex p-5" style={{ rowGap: '20px' }}>
            {championsState.map((champion, i) => {
              return <CardChampion key={i} props={champion} />
            })}
          </div>
        </div>
      </div>
    </StyledBody>
  )
}

export default Champions

// import axios from 'axios'
// import CardChampion from 'components/CardChampion'
// import NavBar from 'components/NavBar/NavBar'
// import { ChampionData } from 'models/champion'
// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { ApplicationState } from 'store'
// import { setChampionsData } from 'store/modules/champions/actions'
// import { CHAMPIONS } from 'store/modules/champions/types'
// import { StyledBody } from './style'
// import { GLOBAL } from 'store/modules/global/types'

// function Champions() {
//   const dispatch = useDispatch()

//   const { champions: championsState } = useSelector<
//     ApplicationState,
//     CHAMPIONS
//   >((state) => state.champions)

//   const { languages, selectLang } = useSelector<ApplicationState, GLOBAL>(
//     (state) => state.global
//   )

//   useEffect(() => {
//     getChampions()
//   }, [selectLang])

//   async function getChampions() {
//     try {
//       const response = await axios.get(
//         `http://ddragon.leagueoflegends.com/cdn/14.8.1/data/${selectLang}/champion.json`
//       )
//       const championsData = []
//       for (const key in response.data.data) {
//         championsData.push(response.data.data[key])
//       }
//       dispatch(setChampionsData(championsData)) // Despacha a ação com os dados dos campeões
//     } catch (error) {
//       console.error('Erro ao buscar dados dos campeões:', error)
//     }
//   }

//   return (
//     <StyledBody>
//       <div className="body-container">
//         <NavBar />
//         <div className="container-xxl">
//           <div className="row d-flex p-5" style={{ rowGap: '20px' }}>
//             {championsState.map((champion, i) => {
//               return <CardChampion key={i} props={champion} />
//             })}
//           </div>
//         </div>
//       </div>
//     </StyledBody>
//   )
// }

// export default Champions
