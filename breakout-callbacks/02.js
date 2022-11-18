// Map

const numbers = [1, 2, 3, 4, 5];

const myOwnMap = (array) => {
  const result = [];

  for (const element of array) {
    result.push(element * 2);
  }

  return result;
};

// console.log(myOwnMap(numbers));

myOwnMapCallback = (array, callback) => {
  const output = [];

  for (const element of array) {
    output.push(callback(element));
  }

  return output;
};

const multiplyBy2 = (number) => number * 2;

// console.log(myOwnMapCallback(numbers, (number) => number * 3));

const numbersBy5 = (array) => {
  return array.map((element, index, arr) => {
    console.log(element);
    console.log(index);
    console.log(arr);
    return element * 5;
  });
  return array.map(multiplyBy2);
};

console.log(numbersBy5(numbers));
