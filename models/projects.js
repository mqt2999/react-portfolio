const { String } = require("core-js");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// {title:"Super Hero Quiz",img:Super,link:"https://kjackson206.github.io/superhero-quiz/"}

const projectSchema = new Schema({
    title:{
        type:String
    },
    img:{
        type:String,
        data:Buffer
    },
    link:{
        type: String
    },

})

const Portfolio = mongoose.model("Portfolio", projectSchema);

module.exports = Portfolio;