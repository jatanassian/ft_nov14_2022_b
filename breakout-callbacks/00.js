const doSomething = (something) => {
  console.log(something);
  something();
};

const sayHello = () => {
  console.log("Hello!!");
};

// doSomething(sayHello);

const doSomethingWithStuff = (something, stuff) => {
  something(stuff);
};

const greetings = (name) => {
  console.log(`Hello ${name}`);
};

const sayBye = (name) => {
  console.log(`Goodbye, ${name}`);
};

doSomethingWithStuff(greetings, "Julien");
doSomethingWithStuff(sayBye, "Julien");
