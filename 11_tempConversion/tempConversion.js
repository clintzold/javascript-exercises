const convertToCelsius = function(fahrenheit) {
  const realTemp = (fahrenheit - 32) * (5 / 9);
  const roundedTemp = Math.round(realTemp * 10) / 10;
  console.log(`${fahrenheit} degrees Fahrenheit is equal to ${roundedTemp} degrees Celsius.`);
};

const convertToFahrenheit = function(celsius) {
  const realTemp = celsius * (9 / 5) + 32;
  const roundedTemp = Math.round(realTemp * 10) / 10;
  console.log(`${celsius} degrees Celsius is equal to ${roundedTemp} degrees Fahrenheit.`);
};

convertToCelsius(80);
convertToFahrenheit(26);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
