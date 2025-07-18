const express= require("express")
const bodyparser= require('body-parser')
const c2= require('../controller/loginController')

const a= express()

a.get('/login',c2.fun1)
a.post('/login',c2.fun2)

module.exports=a