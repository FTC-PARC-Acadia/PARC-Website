import * as React from "react"
import * as headerStyles from "./headerStyles.scss"
import Logo from "./Logo"
// import Logo from "./Logo.js"

const Header = () => {
  return (
    <div class="header" style={headerStyles.header}>
    <div class="logo">
      <Logo/>
    </div>
      <h1> Home </h1>
      <h1> Team </h1>
      <h1> PARC ACADIA #22070 </h1>
      <h1> Contact </h1>
      <h1> About </h1>
    </div>
  )
}

export default Header