const express= require("express")
const bodyparser= require("body-parser")
const c3= require('../controller/signupController')

const a= express()

a.get('/signup',c3.fun1)
a.post('/signup',c3.fun2)

module.exports=a