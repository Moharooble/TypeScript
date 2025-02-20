console.log("Hellow from ts");
var greating = function () {
    console.log("Hellow from rooble");
};
greating();
var wwame = function (name) {
    console.log(name);
};
wwame("rooble");
//***************** Tijaaboyin********************************* */
var age = 32;
var weight = 67.9;
var theName = "eng rooble";
var great = "Hello ".concat(theName);
console.log(great);
var numberArray = [1, 2, 3, 4, 5, 6];
console.log(numberArray);
var person = ["jon", 56];
console.log(person);
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["blue"] = 1] = "blue";
    colors[colors["green"] = 2] = "green";
})(colors || (colors = {}));
var myColors = colors.blue;
var add = function (a, b) {
    return a + b;
};
add(2, 2);
var sub = function (a, b) {
    return a - b;
};
var personInfo = function (name, age) {
    return "Hello I'm ".concat(name, " and I'm ").concat(age, " years old");
};
console.log(add(2, 2));
console.log(sub(3, 2));
console.log(personInfo("ali"));
///**********  Objects   ************* */
var user = {
    name: "rooble dev",
    age: 25
};
console.log(user);
var user1 = {
    name: "rooble dev1",
    age: 21
};
var user2 = {
    name: "rooble dev1",
    age: 22
};
console.log(user1);
console.log(user2);
var id = 23;
var person2 = { name: "ali", age: 24 };
///**********  nullinsh coalesing operator  ************* */
var input = null;
var output = input !== null && input !== void 0 ? input : "defualt";
console.log(output);
///********** Contains Without  Generics  ************* */
// Any 
function contains(arr, item) {
    return arr.includes(item);
}
console.log(contains([1, 2, 3, 4], "1"));
// Number
function containsNumber(arr, item) {
    return arr.includes(item);
}
console.log(containsNumber([1, 2, 3, 4], 1));
// string
function containsString(arr, item) {
    return arr.includes(item);
}
console.log(containsString(['bariis', 'bur', "caleen"], 'bariis'));
///******* Contains With  Generics 
function contain(arr, item) {
    return arr.includes(item);
}
contain([1, 2, 4, 5], 4);
contain(["red", "blue", "black"], "black");
var pair1 = {
    firs: 2,
    second: 3
};
var pair2 = {
    firs: "red",
    second: "red"
};
var pairs = {
    firs: 23,
    second: "pairs"
};
console.log(pairs);
