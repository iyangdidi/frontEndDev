/**
 * Simulate Lodash _.minBy
 * 
 * @param {Array} array 
 * @param {Function} iteratee 
 * @returns {Object} return the minimum value
 */
function minBy(array, iteratee) {
    // 1. params validation ?
    // 2. perform sort
    array.sort((a, b) => {
        const aValue = iteratee(a);
        const bValue = iteratee(b);
        // treat null/undefined value as bigger
        if (aValue === null || aValue === undefined) {
            return 0;
        }
        if (aValue < bValue) {
            return -1;
        }

        if (aValue > bValue) {
            return 1;
        }

        if (aValue == bValue) {
            return 0;
        }
        return aValue - bValue;
    }); // asc
    // 3. get min data
    return array.length === 0 ? undefined : array[0];
}

function minBy(array, iteratee) {
    let result, computed;

    for (const value of array) {
        const current = iteratee(value);
        if (current != null && (computed === undefined || current < computed)) {
            computed = current;
            result = value;
        }
    }
    
    return result;
}

export default minBy;