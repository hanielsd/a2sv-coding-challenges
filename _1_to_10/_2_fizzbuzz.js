/**
 * @param {number} n
 * @return {string[]}
 */
let fizzBuzz = function (n) {
  let answer = new Array(n).fill();
  return answer.map((element, index) => {
    let i = index + 1;
    let dvsblBy3 = i % 3 === 0;
    let dvsblBy5 = i % 5 === 0;

    if (dvsblBy3 && dvsblBy5) return "FizzBuzz";

    if (dvsblBy3) return "Fizz";

    if (dvsblBy5) return "Buzz";

    return "" + i;
  });
};
