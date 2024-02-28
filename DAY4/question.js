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
 console.log(arr);

 //using for loop
 for( let i=0; i< arr.length ; i++){
    console.log(arr[i]);
 }
 let siz = arr.length;
 console.log("the length of array: " +siz );

 //doubling the element
 let doubling = arr.push(num => num *2);
 console.log(doubling);
