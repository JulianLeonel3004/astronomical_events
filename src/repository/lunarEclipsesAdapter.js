const LUNAR_ECLIPSE_REPOSITORY = require("../repository/lunarEclipsesRepository");
const DATE_UTILS = require("../utils/dateUtils");
const ECLIPSE = require("../entities/eclipse");

//METHOD GET LUNAR ECLIPSES
const GET_LUNAR_ECLIPSES = (requestDate, region) => {
  var date;

  if (requestDate) {
    date = DATE_UTILS.dateForRepository(requestDate);
  }

  var eclipses = LUNAR_ECLIPSE_REPOSITORY.get(date, region);

  return eclipses.map((eclipse) =>
    ECLIPSE.new(
      DATE_UTILS.convertFormatDate(eclipse.date),
      eclipse.greatest_td,
      eclipse.type,
      eclipse.umbral_magnitude,
      eclipse.duration,
      eclipse.region_visibility
    )
  );
};

const lunarEclipses = {
  get: GET_LUNAR_ECLIPSES,
};

module.exports = lunarEclipses;
