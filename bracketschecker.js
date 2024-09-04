let isValid = function (s) {
  let ostack = []; // stack to collect opening brackets
  let match = { ")": "(", "]": "[", "}": "{" };
  let obrackets = ["(", "[", "{"];

  for (let bracket of s) {
    if (obrackets.includes(bracket)) ostack.push(bracket);
    else {
      if (ostack.length === 0) return false;
      if (ostack[ostack.length - 1] !== match[bracket]) return false;
      ostack.pop();
    }
  }

  return ostack.length === 0;
};

let balanced = isValid("()[]}{}");
console.log({ balanced });
