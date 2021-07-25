const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Portfolio22"
);

const projectSeed = [
  { title: "Super Hero Quiz", img: "Super", link: "https://kjackson206.github.io/superhero-quiz/" },
  { title: "MVC Tech Blog", img: "/Users/marquellthompson/Desktop/Repos/mqt-portfolio/client/src/Img/homepage.png", link: "https://gamer-groups.herokuapp.com/" },
  { title: "Gamer Group finder", img: "/Users/marquellthompson/Desktop/Repos/mqt-portfolio/client/src/Img/gamerGroup.png", link: "https://gamer-groups.herokuapp.com/" },
  { title: "Work Day Planner", img: "/Users/marquellthompson/Desktop/Repos/mqt-portfolio/client/src/Img/planner.png", link: "https://mqt2999.github.io/Day-Planner/" },
  { title: "ORM Backend", img: "/Users/marquellthompson/Desktop/Repos/mqt-portfolio/client/src/Img/ORM.png", link: "https://youtu.be/TYWiisx48vc" }]


db.Portfolio.remove({})
  .then(() => db.Portfolio.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted! user");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });