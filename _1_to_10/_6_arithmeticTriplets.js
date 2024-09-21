/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
let arithmeticTriplets = function (nums, diff) {
  let n = nums.length;
  let counter = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[j] - nums[i] == diff && nums[k] - nums[j] == diff)
          counter += 1;
      }
    }
  }

  return counter;
};
