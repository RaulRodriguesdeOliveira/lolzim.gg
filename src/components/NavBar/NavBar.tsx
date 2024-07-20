import React, { useEffect, version } from 'react'
import { Link } from 'react-router-dom'
import ItemsData from 'views/items'
import logo from '../../assets/images/League-of-Legends-Logo.png'
import { NavigationBar } from './style'
import { useSelector } from 'react-redux'
import { ApplicationState } from 'store'
import { GLOBAL } from 'store/modules/global/types'
import {
  setSelectLangData,
  setSelectVersionData,
  setVersionData
} from 'store/modules/global/actions'

const NavBar = () => {
  const { languages, selectLang, versions, selectVersion } = useSelector<
    ApplicationState,
    GLOBAL
  >((state) => state.global)
  useEffect(() => {
    handleLanguageChange
    handleVersionChange
  }, [])

  const versionOptions = versions.map((version) => (
    <option key={version} value={version}>
      {version}
    </option>
  ))

  const handleVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVersion = event.target.value
    setSelectVersionData(selectedVersion)
  }

  const languageOptions = languages.map((language) => (
    <option key={language} value={language}>
      {language}
    </option>
  ))

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value
    setSelectLangData(selectedLanguage)
  }

  console.log(selectLang)

  return (
    <NavigationBar>
      <nav className="">
        <div className="container-fluid mobile-nav">
          <div className="col-xl-9 col-md col-sm">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="col-xl-3 col-md col-sm ">
            <Link className="link-Items" to="/items">
              <a>Items</a>
            </Link>
          </div>
        </div>
        <select
          onChange={handleVersionChange}
          value={selectVersion}
          name="versions"
          id="versions"
        >
          {versionOptions}
        </select>
        <select
          style={{ cursor: 'pointer' }}
          onChange={handleLanguageChange}
          value={selectLang}
          name="languages"
          id="languages"
        >
          {languageOptions}
        </select>
      </nav>
    </NavigationBar>
  )
}

export default NavBar
