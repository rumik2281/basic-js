const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The res should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let res = {};
  for (let item of domains) {
    let arr = item.split('.').reverse();
    let domain = '';
    for (let elem of arr) {
      domain += '.' + elem;
      if (res.hasOwnProperty(domain)) {
        res[domain] += 1;
      } else {
        res[domain] = 1;
      }
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};
