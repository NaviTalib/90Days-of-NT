let numbers = [1,2,3,4,5];

// map() : returns new array of same length.
let squares = numbers.map(num => num*num);
console.log(squares);

// filter() : removes unwanted values
let even = numbers.filter( num => num%2 ===0);
console.log(even);

// reduce() : used for totals, prices, counts

let sum = numbers.reduce((total,num) => total + num,0);
console.log(sum);
