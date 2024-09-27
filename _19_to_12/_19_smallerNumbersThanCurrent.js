/**
 * @param {number[]} nums
 * @return {number[]}
 */
let smallerNumbersThanCurrent = function (nums) {
  return nums.map((ni) =>
    nums.reduce((count, nj) => (nj < ni ? count + 1 : count), 0)
  );
};
