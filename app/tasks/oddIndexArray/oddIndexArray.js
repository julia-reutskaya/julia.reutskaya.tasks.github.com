/**
 * Created by ulia on 17.11.14.
 */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = [];

extractOddItems (arr);

function extractOddItems (arr) {
    for (var i = 0; i < arr.length; i += 2) {
        result.push(i);
    }
    console.log(result);
}