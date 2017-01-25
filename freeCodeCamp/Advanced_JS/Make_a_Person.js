/*

Make a Person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

Remember to use Read-Search-Ask (https://github.com/FreeCodeCamp/freecodecamp/wiki/FreeCodeCamp-Get-Help) if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

Details of the Object Model (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)

*/


var Person = function(firstAndLast) {

  var fullName = firstAndLast;

  //First name
  this.getFirstName = function() {
    return fullName.split(' ')[0];
  };

  this.setFirstName = function(first) {
    fullName = first + ' ' + fullName.split(' ')[1];
  };

  //Last name
  this.getLastName = function() {
    return fullName.split(' ')[1];
  };

  this.setLastName = function(last) {
    fullName = fullName.split(' ')[0] + ' ' + last;
  };

  //Full name
  this.getFullName = function() {
    return fullName;
  };

  this.setFullName = function(both) {
    fullName = both;
  };

};

var bob = new Person('Bob Ross');
bob.setFirstName('Bob');
bob.getFirstName();
