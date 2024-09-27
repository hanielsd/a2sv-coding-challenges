/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  return nums.map((ni) =>
    nums.reduce((count, nj) => (nj < ni ? count + 1 : count), 0)
  );
};
