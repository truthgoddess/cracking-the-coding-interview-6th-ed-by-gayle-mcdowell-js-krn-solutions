"use strict";
//given an image represented by an N x N matrix, return image rotated 90 degress in place
//time O(n ^ 2), space O(n)
//takes the position of the top left of a square, a point position, the side length of square
//returns the coordinate it would move to if rotated 90 degrees
function cellClockwise90(topLeftX, topLeftY, squareSideLength, startX, startY) {
    if (startX < topLeftX || startY < topLeftY)
        return [];
    let XLeast = topLeftX;
    let XMost = topLeftX + squareSideLength - 1;
    let YLeast = topLeftY;
    let YMost = topLeftY + squareSideLength - 1;
    let currentX = startX;
    let currentY = startY;
    for (let i = 0; i < squareSideLength - 1; i++) {
        //in the top part of square
        if (currentY === YLeast && currentX < XMost) {
            currentX++;
        }
        //in right part of square
        else if (currentX === XMost && currentY < YMost) {
            currentY++;
        }
        //in bottom part of square
        else if (currentY === YMost && currentX > XLeast) {
            currentX--;
        }
        //in left part of square
        else if (currentX === XLeast && currentY > YLeast) {
            currentY--;
        }
    }
    return [currentX, currentY];
}
//makes deep copy of nested matrix
function copyMatrix(matrix) {
    return matrix.map((arr) => {
        return arr.slice();
    });
}
//given the corner of a square and a square length, and passing the original matrix and the copy
//rotates all points in square designated in copyMatrix
function rotateSquare(minX, minY, squareLength, matrix, matrixCopy) {
    for (let x = minX; x < squareLength + minX; x++) {
        for (let y = minY; y < squareLength + minY; y++) {
            if (x === minX ||
                x === minX + squareLength - 1 ||
                y === minY ||
                y === minY + squareLength - 1) {
                let newPointCoordinates = cellClockwise90(minX, minY, squareLength, x, y);
                let oldValue = matrix[y][x];
                matrixCopy[newPointCoordinates[1]][newPointCoordinates[0]] = oldValue;
            }
        }
    }
}
//rotates a square matrix
function rotateMatrix(matrix) {
    let minX = 0;
    let minY = 0;
    let matrixCopy = copyMatrix(matrix);
    for (let i = 0; i < matrix.length - 1; i++) {
        rotateSquare(minX, minY, matrix.length - i * 2, matrix, matrixCopy);
        minX++;
        minY++;
    }
    return matrixCopy;
}
console.log(rotateMatrix([
    [1, 2],
    [3, 4],
]));
/*
    [3,1],
    [4,2]
*/
console.log(rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]));
/*
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
*/
console.log(rotateMatrix([
    [1, 2, 3, 4],
    ['a', 'b', 'c', 'd'],
    [5, 6, 7, 8],
    ['e', 'f', 'g', 'h'],
]));
/*
   ['e', 5, 'a', 1],
   ['f', 6, 'b', 2],
   ['g', 7, 'c', 3],
   ['h', 8, 'd', 4],
*/
console.log(rotateMatrix([
    [1, 2, 3, 4, 7],
    ['a', 'b', 'c', 'd', 'e'],
    [5, 6, 7, 8, 11],
    ['e', 'f', 'g', 'h,', 'z'],
    ['ant', 'bug', 'happy', 'girl', 'thing'],
]));
/*
   ['ant',   'e',  5,  'a',  1],
   ['bug',   'f',  6,  'b',  2],
   ['happy', 'g',  7,  'c',  3],
   ['girl',  'h',  8,  'd',  4],
   ['thing', 'z',  11, 'e',  7],
*/
