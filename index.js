const express = require('express')
const app = express()
var routes = require("./src/routes/eclipsesRoutes.js")


const PORT = process.env.PORT || 8080
routes(app)

app.listen(PORT, ()=> {
    console.log("run 8080") 
})