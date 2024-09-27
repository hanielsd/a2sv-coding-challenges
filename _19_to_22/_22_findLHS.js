/**
 * @param {number[]} nums
 * @return {number}
 */
let findLHS = function (nums) {
  let uniqueElmts = nums.reduce(
    (acc, num) => (acc.includes(num) ? acc : [...acc, num]),
    []
  );
  let hamSubSets = {};
  for (let num of uniqueElmts) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === num || nums[i] === num + 1) {
        hamSubSets[num] =
          num in hamSubSets ? [...hamSubSets[num], nums[i]] : [nums[i]];
      }
    }
    if (hamSubSets[num].every((n) => n === num)) hamSubSets[num] = [];
  }

  return Object.keys(hamSubSets)
    .map((key) => hamSubSets[key].length)
    .reduce((max, count) => (count > max ? count : max), 0);
};
