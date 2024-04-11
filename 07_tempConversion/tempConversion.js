const convertToCelsius = function(temperatureInFahrenheit) {
  temperatureInCelsius = (temperatureInFahrenheit - 32) / 1.8;
  return +temperatureInCelsius.toFixed(1);
};

const convertToFahrenheit = function(temperatureInCelsius) {
  temperatureInFahrenheit = (temperatureInCelsius * 9/5) + 32;
  return +temperatureInFahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
