// const users = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 1, name: "Alice", age: 25 }, // Duplicate
// ];

// const uniqueUsers = [...new Map(users.map((user) => [user.id, user])).values()];
// const sorted = uniqueUsers.sort((a, b) => a.age - b.age);
// console.log(uniqueUsers);

// const unique = [...new Map(users.map((user) => [user.id, user])).values()];
// console.log("Unique:", unique);

// const uniqueObj = {};
// users.map((user) => {
//   return (uniqueObj[user.id] = user);
// });
// const ent = Object.values(uniqueObj);
// const sort = ent.sort((a, b) => a.age - b.age);
// console.log("sort:", sort);

// Fetch data from 3 APIs in parallel and return the fastest response.

// const fetchFastest = async (urls) => {
//   return Promise.race(urls.map(url => fetch(url).then(res => res.json())));
// };

// 3. Closures
// Problem:
// Fix this code so console.log(i) prints 0, 1, 2:

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// 1. Array & Object Manipulation
// Problem:
// Given an array of objects, group them by a property (e.g., category).

// const products = [
//   { id: 1, name: "Laptop", category: "Electronics" },
//   { id: 2, name: "Shirt", category: "Fashion" },
//   { id: 3, name: "Phone", category: "Electronics" },
// ];

// let categoryWise = {};

// products.map((p) => {
//   if (categoryWise?.[p.category]?.length > 0) categoryWise[p.category].push(p);
//   else categoryWise[p.category] = [p];
// });
// console.log(categoryWise);

// 2. Closures & Scope
// Problem:
// Create a counter function that increments on each call (using closures).
// Expected Behavior:

// javascript
// const createCounter = () => {
//   let count = 0;
//   return () => console.log((count += 1));
// };

// const counter = createCounter();
// counter(); // 1
// counter(); // 2

// const fetchData = async () => {
//   // Simulate API failure (50% chance)
//   if (Math.random() > 0.5) throw new Error("API Failed");
//   return "Data";
// };

// const retry = async (fn, retries = 3) => {
//   try {
//     return await fn();
//   } catch (error) {
//     if (retries <= 0) throw error;
//     return retry(fn, retries - 1);
//   }
// };

// retry(fetchData).then(console.log).catch(console.error);

// Problem:
// Given an array of numbers, return the sum of squares of even numbers.

// javascript
// const nums = [1, 2, 3, 4, 5];

// let sum = 0;
// nums.forEach((num) => {
//   if (num % 2 == 0) {
//     let sq = num * num;
//     sum += sq;
//   }
// });

// console.log(sum);
// console.log(Math.sqrt(2));

// const nestedArray = [1, [2, [3, [4]], 5]];

// const flatten = (arr) => {
//   return arr.reduce((acc, item) => {
//     return acc.concat(Array.isArray(item) ? flatten(item) : item);
//   }, []);
// };

// console.log("re:", flatten(nestedArray));

// const memoFibonacci = (() => {
//   const cache = {};
//   return function fib(n) {
//     if (n in cache) return cache[n];
//     if (n <= 1) return n;
//     cache[n] = fib(n - 1) + fib(n - 2);
//     return cache[n];
//   };
// })();

// console.log(memoFibonacci(10)); // 55 (cached)

// const debounce = (func, delay) => {
//   let timeoutId;
//   return (...args) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => func(...args), delay);
//   };
// };
// const search = debounce((query) => console.log("Searching:", query), 3000);
// search("react"); // Only logs after 300ms of inactivity

const isPalindrome = (text) => {
  const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleanText.split("").reverse().join("");
  return cleanText === reversed;
};

console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("Hello")); // false
