function orbitalPeriod(arr) {
  
  var earthRadius = 6367.4447;
  
  var T; //Orbital period in seconds
  var r = earthRadius + arr[0].avgAlt;// = orbit's semi-major axis in meters
  //G = gravitational constant
  //M = mass of the more massive body
  var GM = 398600.4418; //GM in km^3/2^2
  var m = GM;//Convert to meters - the standard gravitational parameter in m^3/s^2
  var pi = Math.PI;
    
  T = Math.round(2 * pi * Math.sqrt(Math.pow(r, 3) / m));
  
  //T is the orbital period. Now to replace the 
//  var solution = arr.map(function (curr) {arr[0].avgAlt};);
  
  arr[0].avgAlt = arr[0].orbitalPeriod;
  arr[0].orbitalPeriod = T;
  delete arr[0].avgAlt;
  
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

