/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
let reverseString = function (s) {
  let lIndex = 0;
  let rIndex = s.length - 1;
  let temp = "";
  while (lIndex < rIndex) {
    temp = s[lIndex];
    s[lIndex] = s[rIndex];
    s[rIndex] = temp;
    lIndex += 1;
    rIndex -= 1;
  }
};
