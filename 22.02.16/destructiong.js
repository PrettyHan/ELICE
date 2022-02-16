const duck = {
    name: "duck",
    sound: "quack",
};


const {name, sound} = duck;


console.log("name", name);
console.log("sound", sound);


const animals = ["duck", "cat", "bear"];

const [first, second, third] = animals;

console.log("first", first);
console.log("second", second);
console.log("third", third);