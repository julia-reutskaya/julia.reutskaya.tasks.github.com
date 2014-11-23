function sum() {
    var result = arguments[0];

    for (var i = 1; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}