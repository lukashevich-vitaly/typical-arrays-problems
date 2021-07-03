exports.min = function min(array) {
    if (Array.isArray(array) && array.length > 0) {
        return Math.min.apply(null, array);
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (Array.isArray(array) && array.length > 0) {
        return Math.max.apply(null, array);
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    const c = (a, b) => a + b;
    if (Array.isArray(array) && array.length > 0) {
        return array.reduce(c) / array.length;
    } else {
        return 0;
    }
};
