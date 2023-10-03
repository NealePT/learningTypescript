// let sales = 123_456_789;
// let course = 'TypeScript';
// let is_published = true;
// let level;

// function render(document) {
//   console.log(document)
// }

// let numbers: number[] = [];
// numbers.forEach(n => n.)

// Tuples- fixed number array. Passing too many variables will result in type error. Good for key value pairs.
let user: [number, string] = [1, 'Neale']

// Enums- list of related constants. if you define enum as const enum it will produce more refined js code in dist folder
// const small = 1;
// const medium = 2;
// const large = 3;
// becomes
enum Size { Small = 1, Medium, Large };
// Small is set to 0 by default, Medium to 1, Large to 2. Can be specifically set ex. { Small = 1, Medium = 2, Large = 3}
let mySize: Size = Size.Medium;
console.log(mySize) // 2

// Functions