const arrayOfThings = [2, 5, "dog", 10, 7, "cat", {}, 20];

// Print the type of every element in the array
const typesInArray = () => {};

// Print an array of only the numbers in arrayOfThings and multiply them by 10
const numbersBy10 = (array) => {
  return array
    .filter((element) => typeof element === "number")
    .map((number) => number * 10);
};

console.log(numbersBy10(arrayOfThings));
