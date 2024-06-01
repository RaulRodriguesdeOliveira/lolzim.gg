import React, { useEffect, version } from 'react'
import { Link } from 'react-router-dom'
import ItemsData from 'views/items'
import logo from '../../assets/images/League-of-Legends-Logo.png'
import { NavigationBar } from './style'
import { useSelector } from 'react-redux'
import { ApplicationState } from 'store'
import { GLOBAL } from 'store/modules/global/types'
import { setSelectLangData } from 'store/modules/global/actions'

const NavBar = () => {
  // const { languages, selectLang } = useSelector<ApplicationState, GLOBAL>(
  //   (state) => state.global
  // )
  // useEffect(() => {
  //   handleLanguageChange
  // }, [])

  // const languageOptions = languages.map((language) => (
  //   <option key={language} value={language}>
  //     {language}
  //   </option>
  // ))

  // const handleLanguageChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   const selectedLanguage = event.target.value
  //   setSelectLangData(selectedLanguage)
  // }

  return (
    <NavigationBar>
      <nav>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Link className="link-Items" to="/items">
          Items
        </Link>
        {/* <select
          onChange={handleLanguageChange}
          value={selectLang}
          name="languages"
          id="languages"
        >
          {languageOptions}
        </select> */}
      </nav>
    </NavigationBar>
  )
}

export default NavBar
