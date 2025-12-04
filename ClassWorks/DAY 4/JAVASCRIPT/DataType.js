console.log("Hello, welcome to JavaScript programming!");

// Implicit Conversion
console.log("5" + null); // Outputs: "5null"
console.log("5" - null); // Outputs: 5

console.log(true -1); // Outputs: 0
console.log(false -1); // Outputs: -1 //why? //because false is treated as 0

console.log("5" - 2); // Outputs: 3
console.log("5" + 2); // Outputs: "52"

console.log("10" * "2"); // Outputs: 20
console.log("10" / "2"); // Outputs: 5

console.log("10" % "3"); // Outputs: 1

console.log("10" - "3" + 5); // Outputs: 12
console.log("10" + "3" + 5); // Outputs: "1035"

console.log("Sanju" + 5); // Outputs: "Sanju5"
console.log("Sanju" - 5); // Outputs: NaN
console.log("5" * "Sanju"); // Outputs: NaN

console.log(null + 5); // Outputs: 5
console.log(undefined + 5); // Outputs: NaN

console.log(true + true); // Outputs: 2
console.log(false + false); // Outputs: 0
console.log(true + false); // Outputs: 1
console.log(true + 2); // Outputs: 3

console.log(" " + 0); // Outputs: " 0"
console.log(" " - 0); // Outputs: 0
console.log("" + 0); // Outputs: "0"
console.log("" - 0); // Outputs: 0  

console.log("5px" - 2); // Outputs: NaN
console.log("5px" + 2); // Outputs: "5px2"


console.log("12.5" - 2); // Outputs: 10.5
console.log("12.5" + 2); // Outputs: "12.52"
console.log("12.5" * 2); // Outputs: 25
console.log("12.5" / 2); // Outputs: 6.25   

console.log("0" == false); // Outputs: true
console.log("0" === false); // Outputs: false

console.log("Moni "+ true); // Outputs: "Moni true"
console.log("Moni " - true); // Outputs: NaN    
console.log("Moni "+ false); // Outputs: "Moni false"
console.log("Moni " - false); // Outputs: NaN

console.log(undefined == null); // Outputs: true
console.log(undefined === null); // Outputs: false


console.log(NaN == NaN); // Outputs: false
console.log("Explicit conversion");

console.log(Number("123")); // Outputs: 123
console.log(Number("12.34")); // Outputs: 12.34
console.log(Number(""));

console.log(Number(true -1 )); // Outputs: 0
console.log(Number(false -1 )); // Outputs: -1
console.log(Number("5px")); // Outputs: NaN
console.log(Number(null)); // Outputs: 0

console.log(String(123)); // Outputs: "123"
console.log(String(true)); // Outputs: "true"
console.log(String(null)); // Outputs: "null"

console.log(Boolean(1)); // Outputs: true
console.log(Boolean(0)); // Outputs: false
console.log(Boolean("Hello")); // Outputs: true
console.log(Boolean("")); // Outputs: false
console.log(Boolean(null)); // Outputs: false
console.log(Boolean(undefined)); // Outputs: false  
console.log(Boolean(NaN)); // Outputs: false
console.log(Boolean([])); // Outputs: true
console.log(Boolean({})); // Outputs: true
console.log(Boolean(function(){})); // Outputs: true
console.log(Boolean("false")); // Outputs: true
console.log(Boolean("0")); // Outputs: true
console.log("End of explicit conversion");
// Explicit Conversion



if(""){
console.log(" Not Printed" );
}

if([]){
console.log("Printed" );
}

if(0){
console.log(" Not Printed" );
}   

if(null){
console.log(" Not Printed" );
}

if(undefined){
console.log(" Not Printed" );
}    

if("Hello"){
console.log("Printed" );    
}

if({}){
console.log("Printed" );    
}

if(function(){}){
console.log("Printed" );    
}

// Truthy and Falsy Values
console.log("End of Truthy and Falsy Values");

//Equality Operators

console.log(5 == "5"); // Outputs: true
console.log(5 === "5"); // Outputs: false

console.log(null == undefined); // Outputs: true
console.log(null === undefined); // Outputs: false

console.log(0 == false); // Outputs: true
console.log(0 === false); // Outputs: false

console.log("" == false); // Outputs: true           //loose equality
console.log("" === false); // Outputs: false        //strict equality

console.log(true == 1); // Outputs: true
console.log(true === 1); // Outputs: false ;

console.log(false == " " ); // Outputs: true
console.log(false === " "); // Outputs: false

console.log("End of Equality Operators");


let a = 10;  //reassignment
console.log(a); // Outputs: 10
a=20;
console.log(a); // Outputs: 20

const b = 30; //no reassignment
console.log(b); // Outputs: 30
// b=40; // This will throw an error     

let c=20;
// let c=30; // This will throw an error due to redeclaration
console.log(c);


var d = 40; //function-scoped or globally-scoped
console.log(d); // Outputs: 40
d = 50;
console.log(d); // Outputs: 50  //reassignment // not recommended to use var

var d = 60;
console.log(d); // Outputs: 60 //redeclaration

 console.log("End of Variable Declarations"); 

