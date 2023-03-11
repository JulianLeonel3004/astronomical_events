const lunarEclipseRepostiry = require('../../src/repository/lunarEclipsesRepository')

const execute = (date, region) => {
    return lunarEclipseRepostiry.get(date, region)
}

const getLunarElipseUseCase = {
    execute: execute
}

module.exports = getLunarElipseUseCase