//function that takes a string and returns counts of repeated characters
//time O(n), space O(n)
function stringCompression(str: string = '') {
  //have to go through the string once
  if (str.length === 0) return 'ERROR: stringCompression requires string'
  let currentLetter: string = str[0]
  let count: number = 1
  let stringBuilder: string[] = [str[0]]
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== currentLetter) {
      stringBuilder.push(count.toString(), str[i])
      count = 1
      currentLetter = str[i]
    } else {
      count++
    }
  }
  stringBuilder.push(count.toString())
  let compressedStr: string = stringBuilder.join('')
  return compressedStr.length >= str.length ? str : compressedStr
}

let TC1p6: {
  basic: string
  empty: string
  oneLetter: string
  noCompression: string
}

TC1p6 = {
  basic: 'aabbbbcc',
  empty: '',
  oneLetter: 'd',
  noCompression: 'aabbcc',
}

console.log('basic:', stringCompression(TC1p6.basic)) //a2b4c2
console.log('empty:', stringCompression(TC1p6.empty)) //ERROR: stringCompression requires string
console.log('oneLetter:', stringCompression(TC1p6.oneLetter)) //d1
console.log('noCompression:', stringCompression(TC1p6.noCompression)) //d1
