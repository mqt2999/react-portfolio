const router = require("express").Router();
const Portfolio = require("../../models/projects")

router.get("/", function (req,res){
    Portfolio.find({})
    .then(data => {
            res.json(data)
            })
    .catch(err => res.status(404).json(err))
})

module.exports = router;