function execFunctions(arrOfFunctions) {
    var result = [];

    for (var i = 0; i < arrOfFunctions.length; i++) {
        result[i] = arrOfFunctions[i]();
    }
    return result
}