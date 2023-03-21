const LUNAR_ADAPTER =  require('../../repository/lunarEclipsesAdapter')

const execute = (date, region) => {
    return LUNAR_ADAPTER.get(date, region)
}

const getLunarElipseUseCase = {
    execute: execute
}

module.exports = getLunarElipseUseCase