let firstFunction = function () {
    console.log("Hello World");
};

let sayHello = function(name) {
    console.log("hello " + name + "!");
};

const catsFaces = function(howManyFaces) {
    for (let i = 1; i <= howManyFaces; i++){
        console.log(i + " =^.^=");
    }
};

const twoArguments = function(howManyTimes, whatToDraw) {
    for(let i = 1; i <= howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
};

const double = function(number) {
    return number * 2;
};

const partsOfBoady = ["nose", "hair", "head"];
const ajectives = ["smelly", "boryng", "stupid", "nice"];
const animals = ["monkey", "pig", "rat"];

function randomeWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}