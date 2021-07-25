import React from "react"
import Super from "./img/superQuiz.png"
import Mvc from "./img/homepage.png"
import Gamer from "./img/gamerGroup.png"
import Plan from "./img/planner.png"
import Orm from "./img/ORM.png"

const arry = [{ title: "Super Hero Quiz", img: Super, link: "https://github.com/khopkins206/superhero-quiz" }, { title: "MVC Tech Blog", img: Mvc, link: "https://github.com/mqt2999/mvc-webpage" }, { title: "Gamer Group finder", img: Gamer, link: "https://gamer-groups.herokuapp.com/" }, { title: "Work Day Planner", img: Plan, link: "https://mqt2999.github.io/Day-Planner/" }, { title: "ORM Backend", img: Orm, link: "https://youtu.be/TYWiisx48vc" }]

function ProjectList(props) {

    console.log("process.env",process.env.PUBLIC_URL)

    return (
        <div id="past-work" className="pastWork">
            {arry.map((item) =>
                <div className="col">
                    <figure className="listItem"> <img className="thumbNail" src={process.env.PUBLIC_URL + item.img} alt="" /><div className="label"> <a target="_blank" href={item.link}> <h3> {item.title} </h3></a></div> </figure>

                </div>
            )}
        </div>

    )
}
// Make a data base with the picture a link and a summary and id then populate that data to the project page where there will be a api call that will fetch the post and populate the data

export default ProjectList;