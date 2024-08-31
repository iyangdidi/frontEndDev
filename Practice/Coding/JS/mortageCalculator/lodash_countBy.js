function countBy1(array, iteratee) {
    const result = {};

    array.forEach((elem) => {
        const key = String(iteratee(elem));
        if (key) {
            result[key] ??= 0;
            result[key]++;
        }
    });

    return result;
}

function countBy2(array, iteratee) {
    const result = Object.create(null);

    array.forEach((elem) => {
        const key = String(iteratee(elem));
        if (!Object.prototype.hasOwnProperty.call(result, key)) {
            result[key] = 0;
        }

        result[key]++;
    });

    return result;
}
