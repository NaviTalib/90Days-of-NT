// Destructuring lets you extract values from arrays or objects into variable in one line

let user = {
    name : "navicodes",
    age : 22,
    country : "India"
}

// let {name, age, country} = user;

// console.log(name);
// console.log(age);

// rename while destructuring

// let {name : userName, city : userCity} = user;

// console.log(userName)


//  default value 

// let { country = "india"} = user;

// console.log(country)


// destructuring in function parameters

// function greet({name, age}){
//     console.log(`Hi ${name} age ${age}`);
// }
// greet(user);