/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
let pivotArray = function (nums, pivot) {
  let left = [];
  let center = [];
  let right = [];

  for (let num of nums) {
    if (num < pivot) left.push(num);
    else if (num === pivot) center.push(num);
    else right.push(num);
  }
  return [...left, ...center, ...right];
};
