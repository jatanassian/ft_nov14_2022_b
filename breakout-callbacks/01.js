const doMaths = (a, b) => {
  console.log(a - b);
};

// doMaths(10, 5);

const doMathsCallback = (number1, number2, callback) => {
  // console.log("number1 ->", number1);
  // console.log("number2 ->", number2);
  // console.log("callback ->", number1);
  console.log(callback(number1, number2));
};

const addition = (x, y) => {
  return x + y;
};

const substraction = (x, y) => {
  return x - y;
};

// doMathsCallback(3, 4, addition);
// doMathsCallback(substraction(3, 2));
doMathsCallback(3, 5, (a, b) => a * b);
