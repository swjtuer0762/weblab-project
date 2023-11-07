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