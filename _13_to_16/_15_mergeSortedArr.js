/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function (nums1, m, nums2, n) {
  let [i, j] = [0, 0];
  let nums12Bmerged = nums1.slice(0, m);
  if (n === 0) nums1 = nums12Bmerged;
  else {
    for (let k = 0; k < m + n; k++) {
      if (i < m && (nums12Bmerged[i] < nums2[j] || j === n)) {
        nums1[k] = nums12Bmerged[i];
        i++;
      } else {
        nums1[k] = nums2[j];
        j++;
      }
    }
  }
};
