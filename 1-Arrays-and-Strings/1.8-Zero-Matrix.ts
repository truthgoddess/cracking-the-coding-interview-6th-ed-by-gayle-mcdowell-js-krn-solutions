//write a function that if an element in a matrix is 0, set it's entire row and column to zero
//for complexity A refers to length of each row, B refers to number of rows

//validations
//time complexity is O(B), were only checking to validate each row for things
//space complexity is O(1)
function validateMatrix(matrix: any[][]) {
  //check to make sure there is a matrix
  //console.log('matrixlength', matrix.length)
  if (matrix.length === 0) {
    console.log('ERROR: parameter for findZeros must not be empty')
    return false
  }

  //check to see if all items are an array
  for (let row of matrix) {
    if (!Array.isArray(row)) {
      console.log('ERROR: each item in matrix must be an array')
      return false
    }
  }
  //check to see if each row in matrix is same size
  let lastLength = matrix[0].length
  for (let row of matrix) {
    if (row.length !== lastLength) {
      console.log('ERROR: each row in matrix must be the same size')
      return false
    }
  }
  return true
}

//finds the locations of the zeros in a matrix and returns an array of those locations in [x,y] form
//timeComplexity of this is O(A*B) where A is the number of columns and B is the size of the rows
//spaceComplexity O(A*B)
function findZeros(matrix: any[][]): number[][] {
  let locations = []
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === 0) locations.push([x, y])
    }
  }
  return locations
}

//function that chances matrix in place to set an entire row to given value
//used in this algorithm to get a row of zeros
//timeComplexity of this is O(A) or length of the initial array since we fill an entire row
//spaceComplexity O(1)
function setRow(row: number, value: any, matrix: any[][]): void {
  matrix[row].fill(value)
}

//function that changes matrix in place to set an entire column to given value
//time complexity O(A) because it will change that many
//space complexity O(1)
function setColumn(colNum: number, value: any, matrix: any[][]): void {
  for (let y = 0; y < matrix.length; y++) {
    matrix[y][colNum] = value
  }
}

//function if element is zero, sets row and column element is to 0
//time complexity O(validateMatrix) + O(FindZeros) + O(listOfZeros.length) + O(setRow) + O(setColumn)
//time complexity O(B) + O(A*B) + O(A*B) //if all are zeros + O(A) + O(B)
//time complexity O(A*B) + O(A) + O(B) as matrix gets very large ends up being O(A*B)
//space complexity O(A*B) if all are zeros
function zeroMatrix(matrix: any[][]): any[][] {
  if (!validateMatrix(matrix)) {
    console.log('<<<zeroMatrix closing>>>')
    return matrix
  }
  let listOfZeros: any[][] = findZeros(matrix)
  for (let point of listOfZeros) {
    setRow(point[1], 0, matrix)
    setColumn(point[0], 0, matrix)
  }
  return matrix
}

console.log(zeroMatrix([]))
/*
ERROR: param cannot be empty - []
*/
console.log(zeroMatrix([[0]]))
/*
[[0]]
*/
console.log(zeroMatrix([[1], [1, 2]]))
/*
ERROR: rows must all be same size - [[1], [1, 2]]
 */
console.log(
  zeroMatrix([
    [0, 1],
    [0, 0],
  ])
)
/*
[
  [0, 0],
  [0, 0],
]
 */
console.log(
  zeroMatrix([
    [0, 4, 1],
    [8, 5, 2],
    [9, 0, 3],
  ])
)
/*
[
  [0, 0, 0],
  [0, 0, 2],
  [0, 0, 0],
]
 */
console.log(
  zeroMatrix([
    ['e', 5, 'a', 1],
    ['f', 6, 'b', 2],
    ['g', 0, 't', 3],
    ['h', 8, 'd', 0],
  ])
)
/*
[
  ['e', 0, 'a', 0],
  ['f', 0, 'b', 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]
 */
console.log(
  zeroMatrix([
    ['ant', 'e', 5, 'a', 1],
    ['bug', 'f', 6, 'b', 2],
    ['happy', 0, 7, 'c', 3],
    ['girl', 'h,', 8, 'd', 4],
    [0, 'z', 11, 'e', 7],
  ])
)
/*
[
  [0, 0, 5, 'a', 1],
  [0, 0, 6, 'b', 2],
  [0, 0, 0, 0, 0],
  [0, 0, 8, 'd', 4],
  [0, 0, 0, 0, 0],
]
 */
