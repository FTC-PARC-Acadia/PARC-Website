import * as React from "react"
import * as headerStyles from "./headerStyles.scss"

const Header = () => {
  return (
    <div style={headerStyles.header} class="header">
      <h1> Home </h1>
      <h1> About </h1>
    </div>
  )
}

export default Header