/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
let numOfPairs = function (nums, target) {
  let count = 0;
  // for(let i=0;i<nums.length;i++) {
  //     for(let j=0;j<nums.length;j++) {
  //         if(i!==j&& nums[i]+nums[j]===target) count++
  //     }
  // }

  let numsCount = new Map();
  for (let num of nums) {
    if (!numsCount.get(num)) {
      numsCount.set(num, 1);
    } else {
      numsCount.set(num, numsCount.get(num) + 1);
    }
  }

  for (let num of nums) {
    if (target.startsWith(num)) {
      numsCount.set(num, numsCount.get(num) - 1);
      let remaining = target.slice(num.length);
      if (numsCount.get(remaining)) {
        count += numsCount.get(remaining);
      }
      numsCount.set(num, numsCount.get(num) + 1);
    }
  }

  return count;
};
