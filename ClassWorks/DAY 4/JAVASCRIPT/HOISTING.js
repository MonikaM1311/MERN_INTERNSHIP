console.log(x);
var x = 10;  //undefined due to hoisting

// console.log(y);
let y = 20;  //ReferenceError: Cannot access 'y' before initialization

//console.log(z);
const z = 30; //ReferenceError: Cannot access 'z' before initialization

function Example() {
    if(1){
        var a = 50;                             //Function Scope Variable
    }   
    console.log(a); // Outputs: 50
}
Example();

/* function Example() {
    if(1){
        Let a = 50;                          //Block Scope Variable
    }   
    console.log(a); // Outputs: 50
}
Example(); */

/* function Example() {
    if(1){
        const a = 50;                        //Block Scope Variable
    }   
    console.log(a); // Outputs: 50
}
Example(); */