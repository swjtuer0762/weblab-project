// Conditional statement example
let hour = 13;

if (hour < 12) {
    console.log("Good morning");
} else if (hour < 16) {
    console.log("Good afternoon");
} else if (hour < 20) {
    console.log("Good evening");
} else {
    console.log("Good night");
}


// while loop example
let z = 1;

while (z < 1000) {
    z = z * 2;
    console.log(z);
}


// for loop example
const pets = ["cat", "dog", "guinea pig", "bird"];

for (let i = 0; i < pets.length; i++) {
    const phrase = "I love my " + pets[i];
    console.log(phrase);
}


// Functions
const celsiusToFahrenheit = tempC => {
    const tempF = tempC * 1.8 + 32;
    return tempF;
};

console.log(celsiusToFahrenheit(10));


// Callback functions
const addTwo = x => {
    return x + 2;
};

const modifyArray = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
};

let myArray = [5, 10, 15, 20];
// modifyArray(myArray, addTwo);
modifyArray(myArray, x => {
    return x + 2;
});
console.log(myArray);


// Other built-in array functions
// map(...)
let myArray2 = [1, 2, 3, 4, 5];
let modifiedArray = myArray2.map(x => x * 3);
console.log(modifiedArray);
// modifiedArray = [3, 6, 9, 12, 15]

let celsius = [-40, -20, 0, 20, 40];
let fahrenheit = celsius.map(celsiusToFahrenheit);
console.log(fahrenheit);
// fahrenheit = [-40, -4, 32, 68, 104]

// filter(...)
let values = [3, -6, 2, 0, -9, 4];
let positiveValues = values.filter(x => x > 0);
// positiveValues = [3, 2, 4]

let staffNames = ["Claire", "Daniel", "", "Shannen", "", "Tommy"];
let validNames = staffNames.filter(name => name !== "");
console.log(validNames);
// validNames = ["Claire", "Daniel", "Shannen", "Tommy"]]


// objects
const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 2005,
    color: "red"
};

console.log(myCar.model);  // "Mustang"
console.log(myCar["color"]);  // "red"

// const make = myCar.make;
// const model = myCar.model;
const {make, model} = myCar;

const car1 = {
    make: "Ford",
    model: "Mustang",
    year: 2005,
    color: "red"
};

const car2 = {
    make: "Honda",
    model: "Civic",
    year: 2011,
    color: "silver"
};

let myCars = [car1, car2];
let redCars = myCars.filter(car => car.color === "red");
console.log(redCars);
// redCars = [car1]


// Equality
console.log(2 === 2);  // true
console.log(2 === 3);  // false
console.log("2" === "2");  // true
console.log(2 === "2");  // false

arr1 = [1, 2, 3];
arr2 = [1, 2, 3];
console.log(arr1 === arr2);  // false
// 这里的false是因为arr1和arr2是两个不同的array，即使他们的内容是一样的，所以他们的地址也不一样（判断引用是否相同）

let person1 = { name: "Claire" };
let person2 = { name: "Claire" };
console.log(person1 === person2);  // false
// 这里的false是因为person1和person2是两个不同的object，即使他们的内容是一样的，所以他们的地址也不一样（判断引用是否相同）


//How to copy arrays and objects
// a wrong example
// let arr = [1, 2, 3];
// let arrCopy = arr;
// arrCopy.push(4);
// 修改arrCopy的值，arr的值也会被修改

// a correct example
let arr = [1, 2, 3];
let arrCopy = [...arr];

// another correct example
let obj = { name: "Claire" };
let objCopy = {...obj};


// Why we don't use == 
console.log(2 == "2");  // true
console.log(2 == 2);  // true
console.log(2 === "2");  // false
console.log(2 === 2);  // true
// 这里的true是因为==会自动转换类型，而===不会自动转换类型


// Classes
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getArea = () => {
        return this.height * this.width;
    };
}

const myRectangle = new Rectangle(10, 5);
console.log(myRectangle.getArea());  // 50
