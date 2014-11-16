/**
 * Created by ulia on 16.11.14.
 */
var arr = [66, 87, null, 105, "mama", 30, 25, "mula", 0, 125];

sumOnly100Plus(arr);

function sumOnly100Plus (arr) {

    var result = 0;

    for (var i = 0; i < arr.length; i++) {
        if (validate(arr[i])){
            result += arr[i];

        }
    }

    return result;

}

function validate(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && n > 100;
}