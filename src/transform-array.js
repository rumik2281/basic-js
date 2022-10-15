const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let discard = Symbol("Discarded item");
  let res = arr.slice();
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i < res.length - 1) {
          res[i + 1] = discard;
        }
        res[i] = discard;
        break;
      case '--discard-prev':
        if (i > 0) {
          res[i - 1] = discard;
        }
        res[i] = discard;
        break;
      case '--double-next':
        if (i < res.length - 1) {
          res[i] = res[i + 1];
        } else {
          res[i] = discard;
        }
        break;
      case '--double-prev':
        if (i > 0) {
          res[i] = res[i - 1];
        } else {
          res[i] = discard;
        }
    }
  }
  return res.filter(element => element !== discard);
}

module.exports = {
  transform
};
