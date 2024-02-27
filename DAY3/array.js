// array is a variable that keep more than one value it is accessed on their index
//the declaration of an Array
let first=[1,2,3,4,5,6,7,8,9];
let word=["one","two","three","four","five"];
let mixed=[1,"one",2,"two",3,"three"];

//print or accessing the value of an array
console.log("first element:" + first[0]);
console.log("first element:" + first[1]);
console.log("first element:" + first[2]);
console.log("first element:" + first[3]);
console.log("first element:" + first[4]);
console.log("first element:" + first[5]);
console.log("first element:" + first[6]);
console.log("first element:" + first[7]);
console.log("first element:" + first[8]);

//printing a string
console.log("first element:" + word[0]);
console.log("first element:" + word[1]);
console.log("first element:" + word[2]);
console.log("first element:" + word[3]);
console.log("first element:" + word[4]);
 //or

 let firstone = first[0];
 let wordone = word[0];
 console.log("the result:" + firstone + wordone);
                   //using loop in arrays 
for( let i=0 ; i < first.length ; i++){
    console.log(first[i]);
}
for( let i=0 ; i < word.length ; i++){
    console.log(word[i]);
}

mixed.forEach(function(mixed){
    console.log(mixed)
});

// the size of the array using length

let size = first.length;
let long= word.length;
let mi= mixed.length;
console.log("size of first: " + size +  " size of word: " + long + " size of mixed: " + mi);