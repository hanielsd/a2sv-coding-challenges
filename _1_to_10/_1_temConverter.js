/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  let ans = [];
  ans[0] = celsius + 273.15;
  ans[1] = celsius * 1.8 + 32.0;

  return ans;
};
