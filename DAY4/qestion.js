// . is used when you access property of an abject .propertyname {} access the variable value insided the property
let student = {
    name:"uwineza",
    grade:"A",
    module:"computer science",
    age:21
};
console.log(student);
student.name="FILLETTE";
console.log(student);

let own = student.hasOwnProperty("uwineza");
console.log(own);
// OBJECT METHODS
let calculator = {
    add: function(a, b) {// method
      return a + b;
    },
    subtract: function(a, b) {//method
      return a - b;
    },
  };
  console.log(calculator.subtract(5,3));
  console.log(calculator.add(2000,2));
// ----------THIS---------

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person);
  console.log(person.firstName);
  console.log(person.lastName);
  console.log(person.id);
   let fname = person.fullName() ;
  console.log(fname);

  //example 2
   let circle = {
    radius:10,
     calculatearea: function() {
        return  Math.PI * this.radius * this.radius;
     },
   };
   let calculation = circle.calculatearea();
   console.log(calculation);

   //claculation and enumeration

   for (let key in person) {
    console.log(key + ': ' + person[key]);
  }
  console.log( Object.person);   
  
  // object key
  let fruits = {
    apple: 5,
    banana: 3,
    orange: 7,
  };
  
  let fruitKeys = Object.keys(fruits);
  console.log( fruits);
  for (let [key, value] of Object.entries(fruits)) {
    console.log(key + ': ' + value);
  }

  // OOP
// CREATING A CONSTRUCTOR
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  let john = new Person("John", 25);
