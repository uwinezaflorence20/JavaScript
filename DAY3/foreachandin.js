
let colors = ['red', 'green', 'blue'];
// Using forEach to loop through each color and print it
colors.forEach(function(color) {
    console.log(color);
});

let person = {
    name: 'Alice',
    age: 30,
    city: 'Wonderland'
};
// Using for...in to loop through each property of the person object and print it
for (let key in person) {
    console.log(key + ': ' + person[key]);
}

let nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let nestedObject = {
    room1: {
        bed: 'king-size',
        desk: 'wooden'
    },
    room2: {
        bed: 'queen-size',
        desk: 'glass'
    }
};
//nested object
let Obj = {
    citizens: {
        men: 10,
        women:3
    },
    house: {
        bed: "made in rwanda",
        desk: "made in usa"
    }
};
console.log(Obj.citizens.men);
console.log(Obj.citizens.women);
console.log(Obj.house.bed);
console.log(Obj.house.desk);



// nested array
let arr=[
    [1,2,3,4,5],
    ["a","b","c","d","e"],
    [6,7,8,9,10],
];
console.log(arr[2][4]);
console.log(arr[1][4]);