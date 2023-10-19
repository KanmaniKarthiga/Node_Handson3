const { route } = require("./router/categoryRouter")
const express = require("express")
const app = express()
const middleware1 = (req,res,next) =>{
    console.log("middleware1 is running")
    next()
}
app.use(middleware1)
app.use("/api",route)

app.listen(2000, (req,res) =>{
    try{
        console.log("Server is running")
    }
    catch(err){
        console.log("Error occured while starting the server")
    }
})