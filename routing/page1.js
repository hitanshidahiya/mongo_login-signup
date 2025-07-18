const express= require("express")
const bodyparser= require("body-parser")
const c1= require('../controller/homeController')

const a= express()

a.get('/',c1.fun1)
a.post('/',c1.fun2)

module.exports=a