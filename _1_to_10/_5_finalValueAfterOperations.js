let finalValueAfterOperations = function (operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    if (["X++", "++X"].includes(operations[i])) x += 1;
    else if (["X--", "--X"].includes(operations[i])) x -= 1;
  }
  return x;
};
