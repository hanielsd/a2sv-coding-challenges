/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function (nums) {
  let count = {};
  for (let num of nums) {
    if (num in count) count[num] += 1;
    else count[num] = 1;
  }
  for (let num in count) {
    if (count[num] > nums.length / 2) return num;
  }
};
