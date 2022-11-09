import * as React from "react"
import Header from "../components/Header.js"
import TitlePage from "../components/TitlePage.js"
import * as mainPageStyles from "./mainPage.scss"

const MainPage = () => {
  
  return (
    <div class="mainPage" style={mainPageStyles.mainPage}>
      <Header />
      <TitlePage />
    </div>
  )
}

export default MainPage