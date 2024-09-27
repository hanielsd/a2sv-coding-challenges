/**
 * @param {number[]} nums
 * @return {number[]}
 */
let runningSum = function (nums) {
  return nums.map((num, index) => {
    return nums.slice(0, index + 1).reduce((sum, n) => {
      return sum + n;
    }, 0);
  });
};
