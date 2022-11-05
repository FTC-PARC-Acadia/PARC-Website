import * as React from "react"
import * as titlePageStyles from "./titlePageStyles.scss"

const TitlePage = () => {
    return  (
        <div>
            <img class="image" src={'/images/samphil.jpeg'} alt="Phillips Academy's Samphil Building" style={titlePageStyles.image} />
        </div>
    )
}

export default TitlePage