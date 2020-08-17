//function to check whether or not string has all unique characters

let allUniqueStr: string = 'abcdefghz'
let theOtherKind: string = 'hahanowicanwriteanything'
let emptyStr: string = ''
let stringWithNonAN: string = '#$%###'
let stringWithNonANUnique: string = '!@#$%^'

//with additional data structure
//time O(n), space O(1)
function uniqueChar1(str: string) {
  if (str === '') return -1
  let set = new Set<string>()
  for (let letter of str) {
    if (set.has(letter)) return false
    else set.add(letter)
  }
  return true
}

//without additional data structure
//time O(n^2), space O(1)
function uniqueChar2(str: string) {
  if (str === '') return -1
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false
      }
    }
  }
  return true
}

console.group('uniqueChar1 quick tests')
console.log(uniqueChar1(allUniqueStr)) //true
console.log(uniqueChar1(theOtherKind)) //false
console.log(uniqueChar1(emptyStr)) //-1
console.log(uniqueChar1(stringWithNonAN)) //false
console.log(uniqueChar1(stringWithNonANUnique)) //true
console.groupEnd()
console.group('uniqueChar2 quick tests')
console.log(uniqueChar2(allUniqueStr)) //true
console.log(uniqueChar2(theOtherKind)) //false
console.log(uniqueChar2(emptyStr)) //-1
console.log(uniqueChar2(stringWithNonAN)) //false
console.log(uniqueChar2(stringWithNonANUnique)) //true
console.groupEnd()
