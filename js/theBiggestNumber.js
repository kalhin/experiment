const arr = [-26, 1, -3, -6, -8, -3, -100];

let biggestNumber = arr[0];
let smallestNumber = biggestNumber

for (let i = 1; i < arr.length; i++) {
    if (biggestNumber > arr[i]) {
        biggestNumber;
    } else {
        biggestNumber = arr[i];
    }
}
console.log('The biggest number is ' + biggestNumber);
console.log(`The smallest number is ${biggestNumber}`);

