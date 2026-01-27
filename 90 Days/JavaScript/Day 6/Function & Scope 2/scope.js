let x = 33;

function test(){
    console.log(x); // global scope
}

test();
console.log(x); // global scope

function demo(){
    let y = 22; // local scope
    console.log(y);
}
// console.log(y); // ReferenceError: y is not defined