let myName = "uwineza";
let myAge = 20;
let myBod = "20/05/200";
console.log("Hello Everybody my name is "+myName+ " and my age is " +myAge+ "and my birthday is " +myBod);
function testfunction(){
    console.log("Hello people");
}
testfunction();

//six variable example

let rosePrice =8;
let lilyPrice = 10;
let tuliPrice =2;

let roseQuantity=10;
let lilyQuantity=70;
let tuliQuantity = 50;

let roseValue = rosePrice*roseQuantity;
let lilyValue = lilyPrice*lilyQuantity;
let tuliValue = tuliQuantity*tuliPrice;


let totalValue = roseValue+lilyValue+tuliValue;

console.log("Rose – unit price:", rosePrice, ", quantity:", roseQuantity, ", value:", roseValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", lilyQuantity, ", value:", lilyValue);
console.log("Tulip – unit price:", tuliPrice, ", quantity:", tuliQuantity, ", value:", tuliValue);
console.log("Total: ", totalValue);

//

let name1 = "";
let name2 = "";
let name3 = "";

//question1
function reversestring(str){
    return structuredClone.split("").reverse().join("");
}
console.log(reversestring("Uwineza"));

//using split

