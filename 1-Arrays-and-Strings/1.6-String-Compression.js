//function that takes a string and returns counts of repeated characters
//time O(n), space O(n)
function stringCompression(str = '') {
  //have to go through the string once
  if (typeof str !== 'string' || str.length === 0)
    return 'ERROR: stringCompression requires string'
  let currentLetter = str[0]
  let count = 1
  let stringBuilder = [str[0]]
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== currentLetter) {
      stringBuilder.push(count) //count old letter
      stringBuilder.push(str[i]) //new letter
      count = 1
      currentLetter = str[i]
    } else {
      count++
    }
  }
  stringBuilder.push(count)
  let compressedStr = stringBuilder.join('')
  return compressedStr.length >= str.length ? str : compressedStr
}

let basic = 'aabbbbcc'
let empty = ''
let wrongType = [{d: 3}]
let oneLetter = 'd'
let noCompression = 'aabbcc'

console.log('basic:', stringCompression(basic)) //a2b4c2
console.log('empty:', stringCompression(empty)) //ERROR: stringCompression requires string
console.log('wrongType:', stringCompression(wrongType)) //ERROR: stringCompression requires string
console.log('oneLetter:', stringCompression(oneLetter)) //d1
console.log('noCompression:', stringCompression(noCompression)) //d1
