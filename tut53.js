console.log("This is Tutorial 53");
function greet(name, greatText){
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}
function sum(a,b,c){
    let d =a + b + c;
    return d;
    // This line will never execute (Unreachable code)
    // console.log("Function is return")
}

let name0 = "hitesh";
let name1 = "harry";
let name2 = "babu";
let name3 = "pradip";
let greetText = "Good Morning";
greet(name0, greetText);
greet(name1, greetText);
greet(name2, greetText);

//  let returnVal = greet(name3);
//console.log(returnVal)  
let returnVal = sum(1,2,3);
console.log(returnVal)

// console.log( name + "is a good boy");
// console.log( name1 + "is a good boy");
// console.log( name2 + "is a good boy");
// console.log( name3 + "is a good boy");