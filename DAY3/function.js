function greet(name) {
    console.log("Hello, " + name + "!");
}

// Calling the function
greet("John"); 

//other way of declaration function expression
let greet1 = function(name) {
    console.log("Hello, " + name + "!");
};

// Calling the function
greet1("Alice"); 

// third way
let greet2 = (name) => {
    console.log("Hello, " + name + "!");
};

// Calling the function
greet2("Bob"); 