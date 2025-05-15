// let sentence = "I love JavaScript";
// let words = sentence.split(" ");
// console.log(words);

// let myname = "u w i n e z a";
// let toge = myname.split(" ");
// console.log(toge);

// let myname1 = ["a", "b", "c"];
// let toge1 = myname1.join(" ");
// console.log(toge1);

// let nameOne = "uwinezaflorence";
// let reverse = nameOne.split("").reverse().join("");
// console.log(reverse);

// let nameOne1 = "uwinezaflorence";
// let reverse1 = nameOne1.reverse();
// console.log(reverse);

function reverseWords(str){
    return str.split("").reverse().join("");
}
console.log(reverseWords("Milenium"));

function palindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed; // ✅ compare the two strings directly
}

console.log(palindrome("SMS")); // true

let array1=[1,3,5,6,7,8,8,9];

let largest = Math.max(...array1);
console.log(largest);

function findlargest(arr){
   let largest=arr[0];
   for(let i =1 ; i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i];
    }
   }
   return largest; 
}
console.log(findlargest([23,4,5,76,89]));

function FindMax(arr){
    return Math.max(...arr);
}
console.log(FindMax([2,100,45,67]));

let arr = [0,1,2];
arr = arr.slice(2);
console.log(arr);

function greet(name,callback){
callback(`Hello, ${name}!`);
}
greet('Geek',message=>console.log(message));

//arrow function

const sum =(a,b) => a+b;
console.log(sum(2,6));

// function revision
//1.

const functionname =(param)=>{
    return `hello ${param}!`;

}
console.log(functionname("Florence"));
//one line arrow function
const add =(a,b)=>a+b;
console.log(add(2,2));

//no parameter
const display=()=>console.log("hello");
display();

//one parameter
const oneparam=(a)=>a*a;
console.log(oneparam(10));

//arrays
const hey = [1,2,3];
console.log(hey.join(""));
console.log(hey);
const myname = "Uwineza Florence";
const age = 23;
console.log("myname is" +myname+ "and I am " +age+ "years old");


let favoritelanguages = ["java","javascript","sql"];
let joining = favoritelanguages.join(" , ");
console.log(`I love programming in ${joining}`);