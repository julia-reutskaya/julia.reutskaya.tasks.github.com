/**
 * Created by ulia on 17.11.14.
 */

function extractOddItems(arr) {
    var res = [];
    for(var i =1; i < arr.length; i += 2){
        res.push(arr[i])
    }
    return res;
}
