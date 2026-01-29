let user = {
    name : "Talib",
    age : 23,
    isStudent : true
}

// Accessing object properties
console.log(user.name);
console.log(user["age"]);

// Modifying object properties
user.age = 24;
user["isStudent"] = false;

console.log(user);

// Adding new properties
user.city = "New York";
user["country"] = "USA";

console.log(user);

// Deleting properties
delete user.isStudent;
console.log(user);

// Iterating over object properties
for (let key in user) {
    console.log(key + ": " + user[key]);
}

// Checking if a property exists
console.log("name" in user); // true
console.log("isStudent" in user); // false


// Object methods
user.greet = function() {
    console.log("Hello, my name is " + this.name);
}

user.greet();


// Nested objects
let student = {
    name: "Alice",
    age: 22,
    address: {
        street: "123 Main St",
        city: "Los Angeles",
        country: "USA"
    }
};
console.log(student.address.city);