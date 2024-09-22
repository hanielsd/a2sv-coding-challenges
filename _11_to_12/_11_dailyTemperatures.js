/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
let dailyTemperatures = function (temperatures) {
  let answer = new Array(temperatures.length).fill(0);
  let notFoundIndices = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      notFoundIndices.length > 0 &&
      temperatures[i] >
        temperatures[notFoundIndices[notFoundIndices.length - 1]]
    ) {
      let index = notFoundIndices.pop();
      answer[index] = i - index;
    }
    notFoundIndices.push(i);
  }

  return answer;
};
