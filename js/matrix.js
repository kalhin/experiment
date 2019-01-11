const matrix = [
    [1, 2, 5, 9, 0],    
    [8, 6, 8, 13, -2],    
    [5, 2, 6, 0, 14],    
    [5, 5, 0, 5, 9],    
    [-10, 6, -1, 7, 3],    
];

for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
        console.log(matrix[i][j]);
    }
}