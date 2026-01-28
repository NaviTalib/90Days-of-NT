// spreed (open/expand) : spreeds values out

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6]; 

console.log("Array 1:", arr1);
console.log("Array 2 (after spreading arr1):", arr2);

// rest (collect/gather) : gathers multiple values into an array
//                       ,collects multiple values into a single variable.


function sum(...numbers){
    let total = 0;
    for(let num of numbers){
        total += num;
    }
    return total;
}
let result = sum(10, 20, 30, 40, 50);
console.log("Sum of numbers:", result);