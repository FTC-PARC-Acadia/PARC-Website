import * as React from "react"
import * as titlePageStyles from "./titlePageStyles.scss"

const TitlePage = () => {
    return  (
        <div class="titlePage">
            <img class="image" src={'/images/samphil.jpeg'} alt="Phillips Academy's Samphil Building" style={titlePageStyles.image} />
            <div class="whiteRect" style={titlePageStyles.whiteRect} />
        </div>
    )
}

export default TitlePage