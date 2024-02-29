*In JavaScript, variables are used to store and manage data. They are identifiers that represent a memory
 location where a value is stored.
 
 we ara focusing on variables and datatypes*/
//  types of variable
// 1.numerical variable
var age = 18;
var myname="florence";
const isSheAGirl= true;
const array = ["string", 12, false];
console.log("my name is : " + myname + " and am " + age + " years old " );
console.log('My name is : ${myname} and am ${age} years old');
console.log(array);
console.log(isSheAGirl); 
// console.log(myFavFood);
/*
variable declaration and definition
*/
/*
var x; // var declaration not definition
var y=1;// var declaration and definition*/

// understanding different between var,let and const
// let; is a block scope
//var ; is function-scoped variable (older way of declaring variable)
// const; //can not be reassigned after the initial assignment

function mylastname(){
    let me = "florence";
    console.log(me);
}
mylastname();
//object data type
//stored as a reference in the variable's memory location
//eg: object, array, function  
// my  practise
var fname="UWINEZA";
var lname="Florence";
var age=20;
console.log ("my is " + fname  +  lname + " and my age is : " + age );