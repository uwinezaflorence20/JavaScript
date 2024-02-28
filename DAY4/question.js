// CREATING ARRAY
let arr=["peace","rose","mireille" ,"florence"];
console.log(arr);
console.log("the last person: " + arr[3]);
arr.push("Gaelle");
arr.push("Nancy");
arr.push("Pivot");
console.log(arr);
arr.pop();
console.log(arr);
// checking  if an element is included
 let isFlorenceIncluded = arr.includes("florence");
 console.log(isFlorenceIncluded);

 //using for loop
 for( let i=0; i< arr.length ; i++){
    console.log(arr[i]);
 }
 let siz = arr.length;
 console.log("the length of array: " +siz );

 //doubling the element
 let num1=[3,4,5,6,7,8];
 let doubleNumbers = num1.map(num => num *4);
 console.log(doubleNumbers);
 

 //odd numbers

 let oddnum = num1.filter(num => num%2 !==0); 
 console.log(oddnum);

 //finding the summation of all numbers in the array
 let summation= num1.reduce((acc,num)=> acc + num,0);
 console.log(summation);

 // all numers in array are great than 0 it work as boolean it return 0 and 1

 let great = num1.every(num=>num>0);
 console.log(great);
 let great1 = num1.every(num=>num<0);
 console.log(great1);

 // ARRAYS SEARCHING AND SORTING
 // find the index of the element green
 //let arr=["peace","rose","mireille" ,"florence"];
let indexofnum = arr.indexOf("mireille");
console.log(indexofnum);
let indexofnum1 = arr.indexOf("rose");
console.log(indexofnum1);
let indexofnum2= arr.indexOf("peace");
console.log(indexofnum2);

// sorting element in ascending and descending order
let asc = num1.sort((a,b)=> a-b);
console.log(asc);
let desc = num1.sort((b,a)=> a-b);
console.log(desc);

//returning certain number in the array 
let arra1=[1,2,3,4,5,6,7,8,9]
let firstthree= arra1.slice(0,3);
console.log(firstthree);
//  print element of an array in reverse order

let rev1 = num1.reverse();
let rev2 = arra1.reverse();
let rev3 = arr.reverse();
console.log(rev1); 
console.log(rev2); 
console.log(rev3);

// concatinating num1 and arra1
let concaArr = num1 . concat(arra1);
console.log(concaArr);
let concaArr1 = num1 . concat(arr);
console.log(concaArr1); 

// ADVANCED ARRAY OPERATION
let duplicates = [1, 2, 2, 3, 4, 4, 5]; 
let uniquearr=[... new Set(duplicates)];
console.log(uniquearr);

//mixed array

let mixed = [1, "hello", true, 4.5];
let arrayAsString = mixed.join(", ");
console.log(arrayAsString);

//checking if the element has the same datatype
let isSameType = mixed.every((el, _, arr) => typeof el === typeof arr[0]);
console.log(isSameType);

// group elements
let groupedNumbers = concaArr.reduce((acc, num) => {
   acc[num % 2 === 0 ? "even" : "odd"].push(num);
   return acc;
 }, { even: [], odd: [] });
 console.log(groupedNumbers);


// maximum number
let maxNumber = Math.max(...num1);
console.log(maxNumber);

//ARRAY AND STRING MANIPULATION
let helloArray = "Hello, W!".split("");
console.log(helloArray);