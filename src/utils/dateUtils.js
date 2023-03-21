const DATE_POS = {
  year: 0,
  month: 1,
  day: 2,
};

const MONTH_TO_NUMBER = {
  'jan': '01',
  'feb': '02',
  'mar': '03',
  'apr': '04',
  'may': '05',
  'jun': '06',
  'jul': '07',
  'aug': '08',
  'sep': '09',
  'oct': '10',
  'nov': '11',
  'dec': '12'
};

const NUMBER_TO_MONTH = {
  '01': 'jan',
  '02': 'feb',
  '03': 'mar',
  '04': 'apr',
  '05': 'may',
  '06': 'jun',
  '07': 'jul',
  '08': 'aug',
  '09': 'sep',
  '10': 'oct',
  '11': 'nov',
  '12': 'dec'
};

const CONVERT_FORMAT_DATE = (date) => {
  const dateSplit = date.split(' ');

  const year = dateSplit[DATE_POS.year];
  const month = MONTH_TO_NUMBER[dateSplit[DATE_POS.month].toLowerCase()];
  const day = dateSplit[DATE_POS.day];

  return year + '-' + month + '-' + day;
};

const DATE_FOR_DATA = (date) => {
  const dateSplit = date.split("-");

  const year = dateSplit[DATE_POS.year];
  const month = NUMBER_TO_MONTH[dateSplit[DATE_POS.month]];
  const day = dateSplit[DATE_POS.day];
  
  return year + ' ' + month + ' ' + day;
};

const DATE_UTILS = {
  convertFormatDate: CONVERT_FORMAT_DATE,
  dateForRepository: DATE_FOR_DATA
};

module.exports = DATE_UTILS;
