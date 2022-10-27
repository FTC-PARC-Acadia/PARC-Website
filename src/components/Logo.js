import * as React from "react"
import * as logoStyles from "./logoStyles.scss"

const Logo = () => {
    return(
        <div class="logo" style={logoStyles.logo}>
            <img src={'/images/logo.svg'}/>
        </div>
    )
}

export default Logo