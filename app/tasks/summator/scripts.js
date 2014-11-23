var arr = [66, 87, null, 105, "mama", 30, 25, "mula", 0, 125],
    outData = document.querySelector('#result'),
    sumBtn = document.querySelector('#calculate');

sumBtn.onclick = function () {
    outData.value = sumOnly100Plus(arr);
};

function sumOnly100Plus(arr) {

    var result = 0;

    for (var i = 0; i < arr.length; i++) {
        if (validate(arr[i])) {
            result += arr[i];
        }
    }

    return result;
}

function validate(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && n > 100;
}