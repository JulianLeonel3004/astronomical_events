const express = require('express')
const app = express()
var routes = require("./routes/eclipsesRoutes.js")

routes(app)

app.listen(8080, ()=> {
    console.log("server run in port 8080")
})