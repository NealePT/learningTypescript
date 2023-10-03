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
// Type Aliases: you can create a type and use it later 
// type Employee = {
//   readonly id: number,
//   name: string,
//   retire: (date: Date) => void
// }
// let employee: Employee = {
//   id: 1, 
//   name: '', 
//   retire: (date: Date) => {
//     console.log(date)
//   }
// }

// Union Types: can declare multiple types for one variable
// function kgToLbs(weight: number | string): number {
//   // Narrowing- narrowing down type 
//   if (typeof weight === 'number') {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }

// kgToLbs(10);
// kgToLbs('10kg');

// Intersection Types- using '&' you can create something that has multiple types
// type Draggable = {
//   drag: () => void
// };

// type Resizable = {
//   resize: () => void
// };

// type UIWidget = Draggable & Resizable
// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {}
// }

// // Literal Types- allows you to limit values that a variable can be
// type Quantity = 50 | 100;
// let quantity: Quantity = 50;

// // Nullable Types- 
// function greet(name: string | null | undefined) {
//   if (name)
//     console.log(name.toUpperCase());
//   else 
//     console.log('Hi');
// }

type Customer = {
  birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : {birthday: new Date()};
}
let customer = getCustomer(0)
// if (customer !== null && customer !== undefined)
// Using optional property access operator: adds a ? so that it will only print if the customer has a birthday 
  console.log(customer?.birthday)