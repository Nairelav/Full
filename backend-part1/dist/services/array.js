"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayMatch = void 0;
function arrayMatch(arr1, arr2) {
    var arr = [];
    arr1 = arr1.toString().split(",").map(Number);
    arr2 = arr2.toString().split(",").map(Number);
    for (var i in arr1) {
        if (arr2.indexOf(arr1[i]) !== -1)
            arr.push(arr1[i]);
    }
    return arr.sort((x, y) => x - y);
}
exports.arrayMatch = arrayMatch;
module.exports = { arrayMatch };
