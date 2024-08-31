
/**
 * Simulate Lodash _.mean
 * 
 * @param {*} array 
 * @returns 
 */
function mean(array) {
    // need to validate params?
    // mean = sum / length
    // should rund the result?
  
    return array.length === 0
      ? NaN
      : array.reduce((a, b) => a + b) / array.length;
  }
  
  export default mean;
  