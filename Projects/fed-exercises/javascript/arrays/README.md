### Learning Array Functions

## Array.map 
---
Takes an array as input and creates a new array based on a function passed in.  Let's you transform the items in an array to a new shape if the current shape does not work for what you need.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?v=example

Example
```js
// Convert people's names to uppercase
let people = [{name: 'wes king'}, {name: 'coty abadie'}];
let uppercasePeople = people.map(function (person) {
    person.name = person.name.toUpperCase();
    return person;
}
console.log(uppercasePeople); // [{name: 'WES KING'}, {name: 'COTY ABADIE'}]

```
## Array.reduce 
---
Takes an array as input and boils the array down to a single value based on a function passed in.  Useful for calculating totals of properties of objects in the array.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=example

Example
```js
let sales = [{total: 5}, {total: 10}, {total: 3}];
let totalSalesAmount = sales.reduce(function (accumulated, sale) {
    return accumulated + sale.total;
}, 0);
console.log(totalSalesAmount); // 18

```
## Array.filter  
---
Takes an array as input and returns ONLY the values that the function passed in returns "true" for.  Useful for when you only need CERTAIN objects out of an array but not others.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=example

Example
```js
let players = [{name: 'Wes', position: 'WR'}, {name: 'Coty', position: 'QB'}, {name: 'Joe', position: 'WR'}];
let wideReceivers = players.filter(function (player) {
    return player.position === 'WR'; // if player.position === 'WR', we use that player for the filtered list
});
console.log(wideReceivers); // [{name: 'Wes', position: 'WR'}, {name: 'Joe', position: 'WR'}]

```
## Array.find 
---
Takes an array as input and returns the first element of the array that the function passed in returns "true" 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find?v=example

Example
```js
let players = [{name: 'Wes', number: 25}, {name: 'Coty', position: 12}, {name: 'Joe', position: 7}];
let playerNumberTwelve = players.find(function (player) {
    return player.position === 12;
});
console.log(playerNumberTwelve); // {name: 'Coty', position: 12}
// Notice that .filter returns an array of all players that meet the function, .find only returns the first player that does!

```
## Array.sort 
---
Takes an array as input and returns a sorted version of the array based on the sort function passed in.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort?v=example

Example
```js
let receivers = [{name: 'Wes', catches: 10}, {name: 'Coty', catches: 8}, {name: 'Joe', catches: 12}];
let highestCatchesFirst = receivers.sort(function (receiverA, receiverB) {
    return receiverB.catches - receiverA.catches;
    // Alternatively, if you want to get lowest catches first (or 'ascending' values) use receiverA.catches - receiverB.catches
});
console.log(highestCatchesFirst); // [{name: 'Joe', catches: 12}, {name: 'Wes', catches: 10}, {name: 'Coty', catches: 8}]

```
## Array.some 
---
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

Example
```js
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

```

## 💪 Exercises
Head over to [exercise.md](./exercise.md) to work through some exercises!