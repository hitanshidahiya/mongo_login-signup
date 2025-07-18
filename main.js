const express = require("express")
const bodyparser= require("body-parser")
const path= require("path")

const p1= require('./routing/page1')
const p2= require('./routing/login')
const p3= require('./routing/signup')
const p4= require('./routing/welcome')

const app= express()

app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use(p1)
app.use(p2)
app.use(p3)
app.use(p4)

app.listen(4000)