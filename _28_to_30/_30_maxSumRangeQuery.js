/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
var maxSumRangeQuery = function (nums, requests) {
  let getPermutations = (numbers) => {
    let result = new Set();
    if (numbers.length == 1) return [numbers];

    for (let i = 0; i < numbers.length; i++) {
      //remaining numbers
      const rNumbers = [...numbers.slice(0, i), ...numbers.slice(i + 1)];
      // permutations with out current number
      const permutationsWOCN = getPermutations(rNumbers);
      for (let permwocn of permutationsWOCN) {
        result.add([numbers[i], ...permwocn]);
      }
    }

    return result;
  };

  let permutations = getPermutations(nums);
  let maxSum = 0;
  for (let permutation of permutations) {
    let pArr = [...permutation];
    let currentSum = 0;
    for (let request of requests) {
      for (let j = request[0]; j <= request[1]; j++) {
        currentSum += pArr[j];
      }
    }
    if (maxSum < currentSum) maxSum = currentSum;
  }

  return maxSum;
};
