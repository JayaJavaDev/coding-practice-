//calculator logic 
let a = 20;
let b = 10;
let operator = "*";
if(operator=="+"){
console.log(a+b);
}
else if(operator=="-"){
    console.log(a-b);
}
else if(operator=="*"){
    console.log(a*b);
}
else if(operator=="/"){
    console.log(a/b);
}
else if(operator=="%"){
    console.log(a%b);
}
else{
    console.log("invalid operator");
}

//Create a variable `marks` to store student marks

let marks = 85;
let bonus = 5;

//Add bonus marks using an assignment operator
marks+= bonus;

//Determine the grade using if-else
let grade;
if (marks >= 90) {
    grade = "A";
} 
else if (marks >= 70) {
    grade = "B";
} 
else if (marks >= 50) {
    grade = "C";
} 
else {
    grade = "F";
}

//Determine Pass/Fail using a ternary operator
let result = marks >= 50 ? "Pass" : "Fail";

//Give remarks based on grade using a switch statement
let remark;
switch (grade) {
    case "A":
        remark = "Excellent!";
        break;
    case "B":
        remark = "Good";
        break;
    case "C":
        remark = "Average";
        break;
    case "F":
        remark = "Needs Improvement";
        break;
    default:
        remark = "Invalid Grade";
}
console.log("Marks:", marks);
console.log("Grade:", grade);
console.log("Result:", result);
console.log("Remark:", remark);

// Extra messages using logical operators

if (marks >= 80 && result === "Pass") {
    console.log("High marks with bonus!");
}
if (marks >= 90 || grade === "A+") {
    console.log("Outstanding performance!");
}
if (!(result === "Fail")) {
    console.log("You are eligible for the next level.");
}
