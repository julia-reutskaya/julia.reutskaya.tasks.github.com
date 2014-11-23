function getName(path) {
    var pathComponents = path.split('/');

    for (var i = pathComponents.length - 1; i > 0; i--) {
        if (pathComponents[i].length) {
            return pathComponents[i];
        }
    }
}