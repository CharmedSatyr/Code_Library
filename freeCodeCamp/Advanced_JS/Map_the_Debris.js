/*

Map the Debris

Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia (http://en.wikipedia.org/wiki/Orbital_period).

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

Remember to use Read-Search-Ask (https://github.com/FreeCodeCamp/freecodecamp/wiki/FreeCodeCamp-Get-Help)if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.pow() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)


*/
function orbitalPeriod(arr) {

//Formula:   T = 2 pi * sqrt(r^3 / GM )
  
  var T, //s; orbital period
      r; //km; orbit's semi-major axis - earth's radius plus altitude
      
      var earthRadius = 6367.4447; //km 
      var GM = 398600.4418; //km^3/s^2; G = gravitational constant; M = mass of Earth
  
  //Now to replace the avgAlt keys and values with orbitalPeriod ones
  arr.map(function (curr) {
    r = earthRadius + curr.avgAlt;
    T = Math.round(2 * Math.PI * Math.sqrt(Math.pow(r, 3) / GM));
    curr.avgAlt = curr.orbitalPeriod;
    curr.orbitalPeriod = T;
    delete curr.avgAlt;
  });
  
  return arr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

