/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let backspaceCompare = function (s, t) {
  let getFinal = function (input) {
    let bspIndex = input.indexOf("#");
    while (input.indexOf("#") !== -1) {
      if (bspIndex === 0) {
        input = input.slice(1);
      } else {
        input = input.slice(0, bspIndex - 1) + input.slice(bspIndex + 1);
      }
      bspIndex = input.indexOf("#");
    }
    return input;
  };

  s = getFinal(s);
  t = getFinal(t);

  return s === t;
};

console.log({ result: backspaceCompare("a#c", "b") });
