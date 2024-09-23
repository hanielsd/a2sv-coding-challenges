/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function (nums) {
  let k = nums.length - 1;
  for (let i = 0; i <= k; i++) {
    if (nums[i] !== 0) continue;

    for (let j = i; j < k; j++) {
      nums[j] = nums[j + 1];
    }
    nums[k] = 0;
    k--;
    if (nums[i] === 0) i--;
  }
};
