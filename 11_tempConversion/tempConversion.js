const convertToCelsius = function (celsius) {
  return Math.round(celsius - 32) * (5 / 9);
};

const convertToFahrenheit = function (far) {
  return Math.round(far * (9 / 5)) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
