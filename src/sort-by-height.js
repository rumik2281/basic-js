const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let copy = arr.slice();
  let indexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      indexes.push(i);
    }
  }
  indexes = indexes.reverse();
  for (let i = 0; i < indexes.length; i++) {
    copy.splice(indexes[i], 1);
  }
  let arrForSort = copy.sort((a, b) => a - b);
  indexes = indexes.reverse();
  for (let i = 0; i < indexes.length; i++) {
    arrForSort.splice(indexes[i], 0, -1);
  }
  return arrForSort;
}

module.exports = {
  sortByHeight
};
