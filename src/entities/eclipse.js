
const NEW = (date, greatest_td, type, umbral_magnitude, duration, region_visibility) => {
  return {
    date,
    greatest_td,
    type,
    umbral_magnitude,
    duration,
    region_visibility
  }
};

const Eclipse = {
    new: NEW
}

module.exports = Eclipse;
