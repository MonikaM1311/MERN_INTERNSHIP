let students =[
    {name: 'Alice', age: 20, major: 'Computer Science'},
    {name: 'Bob', age: 22, major: 'Mathematics'},
    {name: 'Charlie', age: 19, major: 'Physics'},
    {name: 'David', age: 21, major: 'Chemistry'}            
];

// Accessing Object Properties
console.log("Student Names and Majors:");   
students.forEach(student => {
    console.log("Name: " + student.name + ", Major: " + student.major);
});

let names=students.map(student=>student.name);
console.log("Names of all students: " + names); // Output: ['Alice', 'Bob', 'Charlie', 'David']


// filter+map
let csStudents=students.filter(student=>student.major==="Computer Science").map(student=>student.name);
console.log("Computer Science Students: " + csStudents); // Output: ['Alice']

// Finding the oldest student
let oldestStudent=students.reduce((oldest, current) => {
    return (current.age > oldest.age) ? current : oldest;
}, students[0]);    
console.log("Oldest Student: " + oldestStudent.name); // Output: 'Bob'
