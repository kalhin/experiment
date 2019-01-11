//сума чисел масиву
const arr = [5, 3, 0, 9, 1];

//let sum = 0;

//for (let i = 0; i < arr.length; i++) {
//    sum = sum + arr[i];
//}
//
//console.log(sum);

function summa (array) {
    let sum = 0;
    arr.forEach(function(value){
        sum += value;
    });
    console.log(sum);
}
summa(arr);