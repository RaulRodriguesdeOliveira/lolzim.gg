import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { hot } from 'react-hot-loader/root'
import Champions from 'views/champions'
import DetailsChampion from 'views/detailsChampion'
import { Provider } from 'react-redux'
import store from 'store'
import Items from 'views/items'
import ItemsData from 'views/items'
import axios from 'axios'
import { setLanguageData, setVersionData } from 'store/modules/global/actions'

function App() {
  useEffect(() => {
    getVersion()
  }, [])

  useEffect(() => {
    getLanguage()
  }, [])

  async function getVersion() {
    axios
      .get(`https://ddragon.leagueoflegends.com/api/versions.json`)
      .then((response) => {
        setVersionData(response.data)
      })
  }

  async function getLanguage() {
    axios
      .get(`https://ddragon.leagueoflegends.com/cdn/languages.json`)
      .then((response) => {
        setLanguageData(response.data)
      })
  }
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Champions />} />
          <Route path="/items" element={<ItemsData />} />
          <Route path=":idChampion" element={<DetailsChampion />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default hot(App)
