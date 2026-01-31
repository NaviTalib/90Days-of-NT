let cart = [
    {item:"shirt",price:1200},
    {item:"jeans",price:2500},
    {item:"shoes",price:3500}
];

let affordable = cart.filter(p =>p.price<3000);

let totalPrice = cart.reduce((sum,p)=> sum+p.price,0);

console.log(affordable);
console.log("Total:",totalPrice);