const convertToCelsius = function(temperature) {
  temperature = parseFloat((temperature - 32)*(5/9));
  roundedTemp = Math.round(temperature * 10)/10;
    return roundedTemp;
};

const convertToFahrenheit = function(temperature) {
  temperature = parseFloat((temperature * (9/5) + 32));
  roundedTemp = Math.round(temperature * 10)/10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
