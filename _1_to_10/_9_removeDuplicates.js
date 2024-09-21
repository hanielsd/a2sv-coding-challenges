/**
 * @param {string} s
 * @return {string}
 */
let removeDuplicates = function (s) {
  let result = [];
  for (let ch of s) {
    if (result.length > 0 && result[result.length - 1] === ch) {
      result.pop();
    } else {
      result.push(ch);
    }
  }

  return result.join("");
};
