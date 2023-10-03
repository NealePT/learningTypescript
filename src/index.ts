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
// let user: [number, string] = [1, 'Neale']

// // Enums- list of related constants. if you define enum as const enum it will produce more refined js code in dist folder
// // const small = 1;
// // const medium = 2;
// // const large = 3;
// // becomes
// enum Size { Small = 1, Medium, Large };
// // Small is set to 0 by default, Medium to 1, Large to 2. Can be specifically set ex. { Small = 1, Medium = 2, Large = 3}
// let mySize: Size = Size.Medium;
// console.log(mySize) // 2

// Functions
// You can specify the return type after vars in function declaration
// TS will tell you if variables are unused- noImplicitReturns and noUnusedLocals in config
// Add ? to variable in function declaration to make it optional. You can also provide a default value with = to make it have a value in case one isn't provided when calling the function.
// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 2022) {
//     return income * 1.2;
//   }
//   return income * 1.3;
// }

// calculateTax(10_000, 2022)

// Objects
// let employee = {id: 1};
// employee.name = 'Neale'; // valid in js, not in ts because it assumes everything in the object will be a number
// You can make a value read only if you don't want it to change later
// let employee: {
//   readonly id: number,
//   name: string,
//   retire: (date: Date) => void
// } = { 
//   id: 1, 
//   name: '', 
//   retire: (date: Date) => {
//     console.log(date)
//   }};
// employee.name = 'Neale'

// Advanced types
