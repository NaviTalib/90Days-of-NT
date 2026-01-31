let products = [
    {name:"Laptop",price:50000},
    {name:"Phone",price:20000},
    {name:"Tablet",price:30000},
];

// get products name 
let names = products.map( p => p.name);
console.log(names);


// filter expensive products
let expensive = products.filter(p => p.price > 25000);
console.log(expensive);

// total price
let total = products.reduce((sum,p) => sum+p.price,0);
console.log(total)

