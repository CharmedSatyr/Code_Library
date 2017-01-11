function checkCashRegister(price, cash, cid) {
  var change = cash - price;

  //Values of denominations in descending order
  var denominations = [{
    name: 'ONE HUNDRED',
    value: 100.00
  }, {
    name: 'TWENTY',
    value: 20.00
  }, {
    name: 'TEN',
    value: 10.00
  }, {
    name: 'FIVE',
    value: 5.00
  }, {
    name: 'ONE',
    value: 1.00
  }, {
    name: 'QUARTER',
    value: 0.25
  }, {
    name: 'DIME',
    value: 0.10
  }, {
    name: 'NICKEL',
    value: 0.05
  }, {
    name: 'PENNY',
    value: 0.01
  }];

  //Determine total CID
  var totalCID = cid.reduce(function(acc, next) {
    return acc + next[1];
  }, 0.0);

  //Rule out simple Insufficient Funds and Closed cases
  if (totalCID < change) {
    return 'Insufficient Funds';
  } else if (totalCID === change) {
    return 'Closed';
  }

  //Change values of cid to descending order to match denominations order
  cid = cid.reverse();

  //Make the calculations and build the change array
  //(I originally struggled with a similar solution that wasn't using a reduce function)
  var result = denominations.reduce(function(acc, next, index) {
    //If we owe more or equal change than we have in the value of the next denomination
    if (change >= next.value) {
      //The starting with no changeReady to give back yet
      var changeReady = 0.0;
      //So long as the change we owe is >= value of the next denom, and we have the cash
      while (change >= next.value && cid[index][1] >= next.value) {
        //Give them a bill and add it to our tally of change we have Ready
        changeReady += next.value;
        //subtract that amount from the total we have left to give back
        change -= next.value;
        //Smooth out any JS math rounding errors (for some reason num.toFixed(2) doesn't work)
        change = Math.round(change * 100) / 100;
        //Subtract the bills we have Ready to give back from our cid
        cid[index][1] -= next.value;
      }
      //And we'll accumulate these bills one by one
      acc.push([next.name, changeReady]);
      return acc;
    } else {
      return acc;
    }
    //Into an empty array
  }, []);

  //Return the result but note Insufficient Funds if we don't have the denominations to give proper change
  return result.length > 0 && change === 0 ? result : 'Insufficient Funds';
}

checkCashRegister(19.50, 20.00, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1.00],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]);
