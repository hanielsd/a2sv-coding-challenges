/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  let _1stRepeated = "";
  let index = s.length - 1;
  for (let i = 0; i < index; i++) {
    let currentRptdIndex = s.slice(i + 1).indexOf(s[i]);
    if (currentRptdIndex !== -1 && currentRptdIndex + i + 1 <= index) {
      _1stRepeated = s[i];
      index = currentRptdIndex + i + 1;
    }
  }

  return _1stRepeated;
};
