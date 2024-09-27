/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
let minSteps = function (s, t) {
  let charDiff = new Array(26).fill(0);
  let codeA = 97;
  for (let i = 0; i < s.length; i++) {
    charDiff[s.charCodeAt(i) - codeA]++;
  }
  for (let i = 0; i < t.length; i++) {
    charDiff[t.charCodeAt(i) - codeA]--;
  }

  let steps = charDiff.reduce((total, count) => total + Math.abs(count), 0);

  return steps / 2;
};
