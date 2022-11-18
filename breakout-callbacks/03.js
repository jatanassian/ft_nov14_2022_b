// Filter

const arrayOfThings = [2, 4, "dog", 5, 10, "cat", 100, "fish"];

const ownFilter = (array) => {
  const result = [];

  for (const element of array) {
    if (typeof element === "string") {
      result.push(element);
    }
  }

  return result;
};

// console.log(ownFilter(arrayOfThings));

const ownFilterCallback = (array, callback) => {
  const result = [];

  for (const element of array) {
    if (callback(element)) {
      result.push(element);
    }
  }

  return result;
};

const onlyNumbers = (element) => {
  if (typeof element == "number") {
    return true;
  } else {
    return false;
  }
};

// console.log(ownFilterCallback(arrayOfThings, onlyNumbers));
console.log(
  ownFilterCallback(arrayOfThings, (element) => typeof element === "string")
);

const arrayOfNumbers = (array) => {
  return array.filter((element) => typeof element === "string");
};

console.log(arrayOfNumbers(arrayOfThings));
