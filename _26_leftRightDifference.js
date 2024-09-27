/**
 * @param {number[]} nums
 * @return {number[]}
 */
let leftRightDifference = function (nums) {
  return nums.map((num, i) => {
    let leftSum = nums.slice(0, i).reduce((sum, n) => sum + n, 0);
    let rightSum = nums.slice(i + 1).reduce((sum, n) => sum + n, 0);

    return Math.abs(leftSum - rightSum);
  });
};
