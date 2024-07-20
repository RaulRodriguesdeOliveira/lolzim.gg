import axios from 'axios'
import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ApplicationState } from 'store'
import { setDetailsChampion } from 'store/modules/detailsChampion/actions'
import { DETAILS_CHAMPION } from 'store/modules/detailsChampion/types'
import {
  Details,
  AbilityContainer,
  ChampImgCard,
  ImageSkill,
  Description,
  AboutChampion
} from './style'
import NavBar from 'components/NavBar/NavBar'
import ItemsData from 'views/items'
import Champions from 'views/champions'
import { GLOBAL } from 'store/modules/global/types'

function DetailsChampion() {
  const { idChampion } = useParams()

  const { detailsChampion } = useSelector<ApplicationState, DETAILS_CHAMPION>(
    (state) => state.detailsChampion
  )

  const { selectLang, selectVersion } = useSelector<ApplicationState, GLOBAL>(
    (state) => state.global
  )

  const getInfoChampion = useCallback(
    (idChampion: string | undefined) => {
      axios
        .get(
          `http://ddragon.leagueoflegends.com/cdn/${selectVersion}/data/${selectLang}/champion/${capitalize(
            idChampion
          )}.json`
        )
        .then((response) => {
          for (const key in response.data.data) {
            setDetailsChampion(response.data.data[key])
          }
        })
    },
    [selectLang, selectVersion]
  )

  useEffect(() => {
    getInfoChampion(idChampion)
  }, [getInfoChampion, idChampion])

  function capitalize(string: string | undefined) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
    return string
  }
  return (
    <Details
      backgroundImage={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${capitalize(
        idChampion
      )}_0.jpg`}
    >
      <NavBar />
      <div className="body-container">
        <div className="champ-img">
          {/* <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${capitalize(
            idChampion
          )}_0.jpg`}
        /> */}
        </div>

        <div className="d-flex flex-wrap">
          <AbilityContainer>
            <div className="AboutChampion">
              <div className="info-container">
                <ChampImgCard>
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/${selectVersion}/img/champion/${detailsChampion.image.full}`}
                  />
                </ChampImgCard>
                <h3 className="champion-title">
                  {detailsChampion.title.toUpperCase()}
                </h3>
                <h1 className="champion-name">
                  {detailsChampion.name.toUpperCase()}
                </h1>
                {detailsChampion &&
                  detailsChampion.tags &&
                  detailsChampion.tags.length > 0 && (
                    <div className="champion-function">
                      {detailsChampion.tags.map((tag) => {
                        return <p key={tag}>{tag.toUpperCase()}</p>
                      })}
                      {/* {detailsChampion.tags[1] ? (
                        <div className="d-flex flex-wrap">
                          <p className="function-separator">|</p>
                          <p>{detailsChampion.tags[1].toUpperCase()}</p>
                        </div>
                      ) : (
                        ''
                      )} */}
                    </div>
                  )}
                {/* <div className="champion-function">
                  {detailsChampion.tags.map((tag) => (
                    <div className="function-container" key={tag}>
                      <p className="function-name">{tag.toUpperCase()}</p>
                    </div> */}
                {/* ))} */}
                {/* </div> */}
                <p className="champion-blurb">{detailsChampion.blurb}</p>
                <div className="assets">
                  <label htmlFor="">Ataque</label>
                  <div>{detailsChampion.info.attack}</div>
                  <label htmlFor="">Defesa</label>
                  <div>{detailsChampion.info.defense}</div>
                  <label htmlFor="">Dificuldade</label>
                  <div>{detailsChampion.info.difficulty}</div>
                  <label htmlFor="">Magia</label>
                  <div>{detailsChampion.info.magic}</div>
                </div>
              </div>
              <div className="carouselLayout">
                <div
                  style={{ width: '300px' }}
                  id="carouselExampleIndicators"
                  className="carousel slide m-4"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {detailsChampion.skins.map((skin, i) => {
                      return (
                        <div
                          key={i}
                          className={`carousel-item ${i === 0 ? 'active' : ''}`}
                        >
                          <img
                            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${capitalize(
                              idChampion
                            )}_${skin.num}.jpg`}
                            className="d-block w-100"
                            alt={skin.name}
                          />

                          <div className="Assets">
                            {/* <img
                        // src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/spell/${detailsChampion.spells[]}`}
                      /> */}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column"></div>
            <div className="max-container">
              <div className="assetsContainer">
                <div className="skills">
                  <h1 className="skill-label">HABILIDADES</h1>
                  {detailsChampion.spells.map((spell, id) => (
                    <div key={id} className="champion-spell">
                      <ImageSkill
                        src={`https://ddragon.leagueoflegends.com/cdn/${selectVersion}/img/spell/${spell.image.full}`}
                        alt={spell.name}
                      />
                      <Description>
                        <h3 className="skillName">
                          {spell.name.toUpperCase()}
                        </h3>
                      </Description>
                      <p className="skillDescription">{spell.description}</p>
                    </div>
                  ))}
                  <div className="passive">
                    <div className="passive-assets">
                      <p className="champion-passive">PASSIVA</p>
                      {detailsChampion.passive && (
                        <ImageSkill
                          src={`https://ddragon.leagueoflegends.com/cdn/${selectVersion}/img/passive/${detailsChampion.passive.image.full}`}
                          alt={detailsChampion.passive.name}
                        />
                      )}
                      <Description>
                        <p className="passiveName">
                          {detailsChampion.passive.name.toUpperCase()}
                        </p>
                      </Description>
                    </div>

                    <p className="passiveDesc">
                      {detailsChampion.passive.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AbilityContainer>
        </div>
      </div>
    </Details>
  )
}

export default DetailsChampion
