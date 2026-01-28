// destructuring lets you pull out values of arrays or objects into variable in one line

let arr = [100, 200, 300, 400, 500];

// without destructuring
let first = arr[0];
let second = arr[1];
let third = arr[2];

console.log("Without Destructuring:");
console.log("First:", first);
console.log("Second:", second);
console.log("Third:", third);

// with destructuring
let [a, b, c, d, e] = arr;
console.log("With Destructuring:");
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("d:", d);
console.log("e:", e);


// skipping values
let  [x, , y] = arr; // skips the second element
console.log("x (first):", x);
console.log("y (third):", y);

// default values
let [p = 1, q = 2, r = 3, s = 4, t = 5, u = 600] = arr; // u gets default value
console.log("p:", p);
console.log("q:", q);
console.log("r:", r);
console.log("s:", s);   
console.log("t:", t);
console.log("u (default):", u); // 600