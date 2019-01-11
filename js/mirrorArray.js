//розвернути одномірний масив без створення додаткового масиву
let arr = [7, 10, 2, 0]; // 0, 2, 10, 7

for (let i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i]);
}

arr.splice(0, arr.length / 2);

console.log(arr);