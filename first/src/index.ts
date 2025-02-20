console.log("Hellow from ts")

const greating = () => {
    console.log("Hellow from rooble")
}
greating()

const wwame = (name: string) => {
    console.log(name)
}
wwame("rooble");

//***************** Tijaaboyin********************************* */

let age: number = 32;
let weight: number = 67.9;

let theName: string = "eng rooble";
let great: string = `Hello ${theName}`;
console.log(great);

let numberArray: number[] = [1,2,3,4,5,6];
console.log(numberArray)

let person: [string, number] = ["jon", 56]
console.log(person)

enum colors {red, blue, green}
let myColors: colors = colors.blue


const add: (a: number, b:number) => number = function(a,b){
    return a + b
}
add(2,2);
const sub: (a: number, b:number) => number = (a,b) => {
    return a -b
}
const personInfo = (name: string, age?: number): string => {
    return `Hello I'm ${name} and I'm ${age} years old`
}
console.log(add(2,2));
console.log(sub(3,2));
console.log(personInfo("ali", ));

///**********  Objects   ************* */
const user: {name: string, age: number} = {
    name: "rooble dev",
    age: 25
}
console.log(user)

///**********  Type Aliases   ************* */
type User = {name: string, age: number}

const user1: User  = {
    name: "rooble dev1",
    age: 21
}
const user2: User  = {
    name: "rooble dev1",
    age: 22
}
console.log(user1)
console.log(user2)

///**********  Union Types  ************* */

type stringOrNumber = String | Number;

const id: stringOrNumber = 23

///**********  intersection type  ************* */
type named = {name: string}
type aged =  {age: number}

type Person = named & aged;

const person2: Person = {name: "ali", age: 24}

///**********  nullinsh coalesing operator  ************* */

const input = null;

const output = input ?? "defualt";
console.log(output);

///********** Contains Without  Generics  ************* */

// Any 
function contains(arr: any[], item: any): boolean {
    return arr.includes(item)
}
console.log(contains([1,2,3,4], "1"));

// Number
function containsNumber(arr: number[], item: number): boolean {
    return arr.includes(item)
}
console.log(containsNumber([1,2,3,4], 1));
// string
function containsString(arr: string[], item: string): boolean {
    return arr.includes(item)
}
console.log(containsString(['bariis','bur',"caleen"], 'bariis'));

///******* Contains With  Generics 

function contain<T>(arr: T[], item: T): boolean {
    return arr.includes(item)
}
contain<number>([1,2,4,5],4)
contain<string>(["red", "blue", "black"], "black")

///********** pair interface  ************* */


interface NumberPair {
    firs: number;
    second: number;
}

const pair1: NumberPair = {
    firs: 2,
    second: 3
}
// another happened code dublicade
interface StringPair {
    firs: string;
    second: string;
}

const pair2: StringPair = {
    firs: "red",
    second: "red"
}

///********** pair interface
interface Pair<T,U> {
    firs: T;
    second: U;
}

let pairs: Pair<number,string> = {
    firs: 23,
    second: "pairs"
}
console.log(pairs)






