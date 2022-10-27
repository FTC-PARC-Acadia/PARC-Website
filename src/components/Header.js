import * as React from "react"
import * as headerStyles from "./headerStyles.scss"
import Logo from "./Logo"
import { FiMenu } from 'react-icons/fi'

const Header = () => {
  return (
    <>
      <div class="header" style={headerStyles.header}>
        <div class="headerLeft" style={headerStyles.headerLeft}>
          <a href=""> 
            <Logo/> 
          </a>
          <a href=""> 
            <h1> Team </h1>
          </a>
        </div>
        <div class="headerName" style={headerStyles.headerName}>
          <a href="">
            <h1> PARC ACADIA #22070 </h1>
          </a>
        </div>
        <div class="headerRight" style={headerStyles.headerRight}>
          <a href="">
            <h1> Contact </h1>
          </a>
          <a href="">
            <h1> About </h1>
          </a>
          <div class="menu" style={headerStyles.menu}>
            <FiMenu size={50}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header