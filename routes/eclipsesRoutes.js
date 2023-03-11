
const bodyParser = require('body-parser')

const appRouter =  app => {
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
 
    app.get("/", (req, res) => {
        res.status(200).send("hello world");
    });
}

module.exports = appRouter