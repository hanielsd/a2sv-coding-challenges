let numIdenticalPairs = function (nums) {
  let numsLength = nums.length;
  let totalGoodPairs = 0;
  for (let i = 0; i < numsLength - 1; i++) {
    for (let j = i + 1; j < numsLength; j++) {
      if (nums[i] == nums[j]) totalGoodPairs += 1;
    }
  }

  return totalGoodPairs;
};

let total = numIdenticalPairs([1, 2, 3]);
console.log({ total });
