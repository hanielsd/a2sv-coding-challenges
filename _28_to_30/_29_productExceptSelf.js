/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let answer = new Array(nums.length).fill(0);
  let countZeros = nums.filter((num) => num === 0).length;

  if (countZeros > 1) return answer;

  if (countZeros === 1) {
    const productOfAll = nums
      .filter((num) => num !== 0)
      .reduce((product, num) => product * num, 1);
    answer[nums.indexOf(0)] = productOfAll;
    return answer;
  }

  const productOfAll = nums.reduce((product, num) => product * num, 1);
  for (let i = 0; i < nums.length; i++) {
    answer[i] = productOfAll / nums[i];
  }

  return answer;
};
