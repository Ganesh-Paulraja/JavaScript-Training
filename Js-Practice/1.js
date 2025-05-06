function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log("Count:", count);
  };
}

const counter = outer();

counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3


const getUserFromDB = (id) => {
  return new Promise((resolve, reject) => {
    // fake delay
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, name: "Bro" });
      } else {
        reject("User not found");
      }
    }, 1500);
  });
};