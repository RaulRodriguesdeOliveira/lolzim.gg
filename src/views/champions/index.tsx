/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import CardChampion from 'components/CardChampion'
import NavBar from 'components/NavBar/NavBar'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ApplicationState } from 'store'
import { setChampionsData } from 'store/modules/champions/actions'
import { CHAMPIONS } from 'store/modules/champions/types'
import { StyledBody } from './style'
import { GLOBAL } from 'store/modules/global/types'

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
