const users = [
  {
    id: 1,
    name: "Aakash",
    age: 24,
    hobbies: ["gym", "coding", "gaming", "reading"],
    purchases: [
      { item: "Protein Powder", price: 2000 },
      { item: "Dumbbells", price: 1500 },
    ],
  },
  {
    id: 2,
    name: "Neha",
    age: 27,
    hobbies: ["reading", "traveling"],
    purchases: [
      { item: "Books", price: 800 },
      { item: "Backpack", price: 1200 },
    ],
  },
  {
    id: 3,
    name: "Ravi",
    age: 30,
    hobbies: ["cooking", "cycling"],
    purchases: [
      { item: "Cycle", price: 10000 },
      { item: "Cookware", price: 3000 },
    ],
  },
];

//1. seperate user whose age > 25.
const filteredUser = users.reduce((acc, ele, i, arr) => {
  if (ele.age > 25) {
    return [...acc, ele];
  } else {
    return acc;
  }
}, []);
// console.log(filteredUser);

//2. helper function
const countObj = (str) =>
  str.split("").reduce((acc, ele, i, arr) => {
    acc[ele] = (acc[ele] || 0) + 1;
    return acc;
  }, {});
//2. character counts
const obj = users.map((user) => countObj(user.name));
// console.log(obj);

//3 extra all the hobbies in an array
const userHobbies = users.flatMap((ele) => ele.hobbies);
// console.log(userHobbies);

//4 extra all the unique hobbies in an array
const hobbies = new Set(users.flatMap((user) => user.hobbies));
// console.log([...hobbies]);

// 5. find user whose age is 24
const user = users.find((user) => user.age === 24);
// console.log(user);

// 6. find index of the user whose age is 24
const userIndex = users.findIndex((user) => user.age === 24);
console.log(userIndex);

// 7. find user whose age is 24
const newUser = users.some((user) => user.age === 24);
console.log(newUser);

//8. check all the user age > 30
const isAllGreaterThan30 = users.every((user) => user.age > 30);
console.log(isAllGreaterThan30);
