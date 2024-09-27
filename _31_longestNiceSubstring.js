/**
 * @param {string} s
 * @return {string}
 */
let longestNiceSubstring = function (s) {
  let isNice = (str) => {
    let strArr = str.split("");
    return strArr.every(
      (char) =>
        strArr.includes(char.toLowerCase()) &&
        strArr.includes(char.toUpperCase())
    );
  };

  let longestNiceStr = "";
  let maxLen = 0;
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let substr = s.slice(i, j + 1);
      if (isNice(substr) && substr.length > maxLen) {
        longestNiceStr = substr;
        maxLen = substr.length;
      }
    }
  }

  return longestNiceStr;
};
