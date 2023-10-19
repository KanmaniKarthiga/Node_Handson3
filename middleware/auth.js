const auth = (req,res,next) =>{
    const age = 19;
    if(age>18){
        console.log("middleware2 is runnning")
        res.send("User allowed in")
    }
    else{
        res.send("User is not allowed")
    }
}
module.exports = auth