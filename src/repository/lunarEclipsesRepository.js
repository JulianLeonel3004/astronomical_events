const LUNAR_ECLIPSES = require("../data/lunar_eclipses.json")
const Eclipse = require("../entities/eclipse")

//FILTERS
const filterByDate = (eclipses, date)  => {
    return eclipses.filter(eclipse => eclipse.date == date)
}

const filterByRegion = (eclipses, region)  => {
    return eclipses.filter(eclipse =>  eclipse.region_visibility.toLocaleUpperCase().includes(region.toLocaleUpperCase()))
}

const filterByDateAndRegion = (eclipses, date, region) => {
    return eclipses.filter(eclipse =>  eclipse.date == date 
        && eclipse.region_visibility.toLocaleUpperCase().includes(region.toLocaleUpperCase()))
}

const filter = (eclipses, date, region) => {
   return (date && !region) ? filterByDate(eclipses, date)
    : (region && !date) ? filterByRegion(eclipses, region)
    : (date && region) ? filterByDateAndRegion(eclipses, date, region)
    : eclipses
}


//METHOD GET
const GET = (dateFilter, regionFilter) => {
    return filter(LUNAR_ECLIPSES, dateFilter, regionFilter)
    .map(eclipse => Eclipse.new(
        eclipse.date,
        eclipse.greatest_td,
        eclipse.type,
        eclipse.umbral_magnitude,
        eclipse.duration, 
        eclipse.region_visibility
    ))
}

const lunarEclipses = {
    get: GET
}

module.exports = lunarEclipses