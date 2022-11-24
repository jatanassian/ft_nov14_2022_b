const consoleLogging = (string) => {
  return new Promise((resolve, reject) => {
    if (!string) {
      reject("You forgot a string!!");
    }
    resolve(12345);
  });
};

consoleLogging("hello")
  .then((response) => console.log("From .then", response))
  .catch((error) => console.log("From .catch", error))
  .finally(() => console.log("Finally this is over!!!"));
