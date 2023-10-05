import './App.css';

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role:[number, string];
// Return void returns undefined, return never returns nothing
let printName: (name:string) => never;

interface Person {
  name:string,
  age?:number,
}
interface Guy extends Person {
  profession: string;
}

// type X = {
//   a:string;
//   b:number;
// }
// type Y = X & {
//   c:string;
//   d:number;
// }
// let y: Y = {
//   a: "iofnas",
//   b: 16,
//   c: "fias",
//   d: 15,
// }

// let person: Person = {
//   name: "Neale",
// }

// let lostOfPeople: Person[];

// let personName: unknown; 

const App = () => {

  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
