export function arrayMatch(arr1: Array<string>, arr2: Array<string>): Array<string> {
  var arr = [];

  arr1 = arr1.toString().split(",").map(String);
  arr2 = arr2.toString().split(",").map(String);

  for (var i in arr1) {
    if (arr2.indexOf(arr1[i]) !== -1) arr.push(arr1[i]);
  }

  return arr.sort();
}
