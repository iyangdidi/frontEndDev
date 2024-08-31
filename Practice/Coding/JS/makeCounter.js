/**
 * @param {number} startFrom
 * @returns {function}
 */
function makeCounter(startFrom = 0) {
    let counter = startFrom;
    return () => counter++;
}