//function to check whethere or not string has all unique characters

let allUniqueStr = 'abcdefghz'
let theOtherKind = 'hahanowicanwriteanything'
let emptyStr = ''
let stringWithNonAN = '#$%###'
let stringWithNonANUnique = '!@#$%^'
let array = ['a', 'b']
let object = {a: 3}

//with additional data structure
//time O(n), space O(1)
function uniqueChar1(str) {
  if (str === '') return -1
  if (typeof str !== 'string') return -1
  let set = new Set()
  for (let letter of str) {
    if (set.has(letter)) return false
    else set.add(letter)
  }
  return true
}

//without additional data structure
//time O(n^2), space O(1)
function uniqueChar2(str) {
  if (str === '') return -1
  if (typeof str !== 'string') return -1
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false
      }
    }
  }
  return true
}

console.log(uniqueChar1(allUniqueStr)) //true
console.log(uniqueChar1(theOtherKind)) //false
console.log(uniqueChar1(emptyStr)) //-1
console.log(uniqueChar1(stringWithNonAN)) //false
console.log(uniqueChar1(stringWithNonANUnique)) //true
console.log(uniqueChar1(array)) //-1
console.log(uniqueChar1(object)) //-1
console.log(uniqueChar2(allUniqueStr)) //true
console.log(uniqueChar2(theOtherKind)) //false
console.log(uniqueChar2(emptyStr)) //-1
console.log(uniqueChar2(stringWithNonAN)) //false
console.log(uniqueChar2(stringWithNonANUnique)) //true
console.log(uniqueChar2(array)) //-1
console.log(uniqueChar2(object)) //-1
