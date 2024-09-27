/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function (height) {
  let area = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const currentArea =
      (right - left) *
      (height[left] < height[right] ? height[left] : height[right]);
    if (area < currentArea) area = currentArea;

    if (height[left] < height[right]) left++;
    else right--;
  }

  return area;
};
