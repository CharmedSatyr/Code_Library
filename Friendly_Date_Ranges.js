function makeFriendlyDates(arr) {
  var a = arr[0].split('-');
  var b = arr[1].split('-');
  
  var simple = [];
  
  var aSet = [];
  a.map(function(curr) {aSet.push(parseInt(curr)); return aSet;});
  simple.push(aSet);
  
  var bSet = [];
  b.map(function(curr) {bSet.push(parseInt(curr)); return bSet;});
  simple.push(bSet);
  
  return simple;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);

