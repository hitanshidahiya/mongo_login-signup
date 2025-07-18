const express= require("express")
const bodyparser= require("body-parser")
const c4= require('../controller/welcomeController')

const a= express()

a.use('/welcome',c4.fun1)

module.exports=a