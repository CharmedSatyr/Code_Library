var Person = function(firstAndLast) {

  this.getFirstName = function setFirstName(first) {
    return firstAndLast.split(' ').shift().toString();
  };
  
  this.setFirstName = function getFirstName(first){return first;};
  
  this.getLastName = function setLastName(last) {
    return firstAndLast.split(' ').pop().toString();
  };
  
  this.setLastName = function getLastName(last){return last;};
  
  this.getFullName = function setFullName(firstAndLast) {
    var f = this.getFirstName();
    var l = this.getLastName();
    return this.getFirstName() + " " + this.getLastName();
  };
  
  this.setFullName = function getFullName() {};

  
};

var bob = new Person('Bob Ross');
bob.setFirstName("Haskell");
