import React from "react"
import Marquell from "./img/Me.png"
function Bio () {
    return(
        <div className="aboutMe">
            <img id="me" src={Marquell} alt="Marquell Thompson"/>

            <article className="bio">

                <h3> Biography </h3>

                <p id="about-me"> I am a 22 year old developer originally from Minnesota. I moved to Dallas, Texas in
                    2018 after
                    graduating highschool from Cretin-Derham Hall. Shortly after I attended some community colleges to
                    obtain credits and transfer to a univerity. I transfered to Stephen F Austin State Univerity and
                    majored in Computer Science, Both my semsters where heavily affected by covid-19 and led me to drop
                    out. Fortunately I was able to attend a coding Bootcamp for Full-Stack development at SMU to persue my goals and become a
                    Web Developer. </p>

            </article>
        </div>
    )
}

export default Bio;