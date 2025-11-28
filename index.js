console.log("Hello World");
console.error("erro");

alert("Welcome to the NodeApi project!");

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < 10; i++) {
  console.log(numbers);

  setTimeout(() => {
    console.log(new Date());
  }, 1000);
}
