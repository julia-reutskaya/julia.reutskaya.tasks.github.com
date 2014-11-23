function isInArray(arr) {
    for (var i = 1; i < arguments.length; i++) {
        if (arr.indexOf(arguments[i]) === -1) {
            return false;
        }
    }
    return true;
}