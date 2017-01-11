/*
Inventory Update

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
*/


function updateInventory(arr1, arr2) {

  //Return the item names for current and new inventories
  var curNames = arr1.map(function(curr) {return curr[1];});
  var newNames = arr2.map(function(curr) {return curr[1];});

  //Concatenate the two lists after filtering them for duplicates, sort the new list alphabetically.
  var dedupedNames = (curNames.concat(newNames.filter(function(item){return curNames.indexOf(item) < 0;})).sort());
  
  //Start each item on dedupedNames with a zero count in the required format.
  var runningTally = dedupedNames.map(function(curr) {return [0, curr];});
  
  //Combine the two original, unprocessed arrays to have something to check against.
  var allItems = arr1.concat(arr2);

  //Now we want to iterate through each allItems name (allItems[x][1]) and check if it matches a name on the allNames list. If so, add whatever its count is to the count in runningTally
  for (var x in allItems) {
    if (dedupedNames.indexOf(allItems[x][1]) >= 0) {
      runningTally[(dedupedNames.indexOf(allItems[x][1]))][0] += allItems[x][0];
    }
  }  
//runningTally should be up to date now
  return runningTally;

}

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
