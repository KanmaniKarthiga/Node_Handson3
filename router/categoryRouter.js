const {bollywoodcontroller, hollywoodcontroller, fitnesscontroller, foodcontroller} = require("../controller/routesController")
const auth = require("../middleware/auth")
const route = require("express").Router()

route.get("/bollywood",auth, bollywoodcontroller)
route.get("/hollywood", auth, hollywoodcontroller)
route.get("/fitness", fitnesscontroller)
route.get("/food", foodcontroller)



module.exports = {route}