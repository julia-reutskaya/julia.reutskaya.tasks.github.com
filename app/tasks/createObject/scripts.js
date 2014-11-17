/**
 * Created by ulia on 17.11.14.
 */
function createObject(arrOfKeys, arrOfData) {
    var res = {};

    for(var i = 0; i < arrOfKeys.length; i++){
        res[arrOfKeys[i]] = arrOfData[i];
    }
    return res;
}