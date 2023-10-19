const {bollywood, hollywood, fitness, food} = require("../dummyData/data")

const bollywoodcontroller = (req,res) =>{
        return res.send(bollywood)
}
const hollywoodcontroller = (req,res) =>{
    return res.send(hollywood)
}
const fitnesscontroller = (req,res) =>{
    return res.send(fitness)
}
const foodcontroller = (req,res) =>{
    return res.send(food)
}
module.exports = {bollywoodcontroller, hollywoodcontroller, fitnesscontroller, foodcontroller}