function user(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(user()); // Output: Hello, Guest!
console.log(user("Talib")); // Output: Hello, Alice!