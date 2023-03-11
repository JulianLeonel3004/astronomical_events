const express = require('express')
const app = express()
var routes = require("./src/routes/eclipsesRoutes.js")

routes(app)

app.listen(8080, ()=> {
    console.log("run 8080") 
})