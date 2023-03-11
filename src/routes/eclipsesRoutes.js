const bodyParser = require("body-parser");
const getLunarElipseUseCase = require("../../usecases/eclipses/getLunarEclipsesUseCase");

const appRouter = (app) => {
  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

  app.get("/lunareclipses", (req, res) => {
   const date = req.query.date;
   const region = req.query.region;

    res.status(200).json(getLunarElipseUseCase.execute(date, region));
  });
};

module.exports = appRouter;
