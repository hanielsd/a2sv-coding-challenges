/**
 * @param {string[]} operations
 * @return {number}
 */
let calPoints = function (operations) {
  let record = [];
  let len = 0;
  for (let opn of operations) {
    switch (opn) {
      case "+":
        if (len > 0)
          record.push(len > 1 ? record[len - 1] + record[len - 2] : record[0]);
        break;
      case "D":
        if (len > 0) record.push(2 * record[len - 1]);
        break;
      case "C":
        if (len > 0) record.pop();
        break;
      default:
        record.push(+opn);
    }
    len = record.length;
  }

  return record.reduce((sum, score) => sum + score, 0);
};
