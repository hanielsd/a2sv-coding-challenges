/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
let pivotArray = function (nums, pivot) {
  let rearranged = nums.filter((num) => num === pivot);
  let pivotsCount = rearranged.length;

  // nums without pivot
  let numswop = nums.filter((num) => num !== pivot);

  for (let i in numswop) {
    if (numswop[i] < pivot) {
      let left = rearranged.slice(0, rearranged.indexOf(pivot));
      let index = left.length;
      for (let j in left) {
        if (i < numswop.indexOf([left[j]])) {
          index = j;
          break;
        }
      }
      rearranged = [
        ...rearranged.slice(0, index),
        +numswop[i],
        ...rearranged.slice(index),
      ];
    } else {
      let baseLen = rearranged.indexOf(pivot) + pivotsCount;
      let right = rearranged.slice(baseLen);
      let index = rearranged.length;
      for (let j in right) {
        if (i < numswop.indexOf([right[j]])) {
          index = j + baseLen;
          break;
        }
      }
      rearranged = [
        ...rearranged.slice(0, index),
        +numswop[i],
        ...rearranged.slice(index),
      ];
    }
  }

  return rearranged;
};

let result = pivotArray([9, 12, 5, 10, 14, 3, 10], 10);
console.log(result);
