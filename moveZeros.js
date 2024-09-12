let moveZeroes = function (nums) {
  let count = nums.filter((num) => num === 0).length;
  conso;
  let zeros = new Array(count).fill(0);
  nums = [...nums.filter((num) => num !== 0), ...zeros];
};

let x = [0, 1, 0, 3, 12];
console.log({ x });
moveZeroes(x);
console.log({ x });
