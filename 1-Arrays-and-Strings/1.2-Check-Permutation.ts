//function to check given two strings, they are permutations of each other
let TC1p2: {
  yesP: string[]
  noP: string[]
  definitelyNotP: string[]
  emptyStr: string[]
  duplicateNo: string[]
  dupplicateYes: string[]
}

TC1p2 = {
  yesP: ['str1', 'rts1'],
  noP: ['str1', 'str2'],
  definitelyNotP: ['d', 'thisisthestringthatneverends'],
  emptyStr: ['', 'a'],
  duplicateNo: ['aab', 'bba'],
  dupplicateYes: ['aaab', 'abaa'],
}

//time O(n), space O(length)
function checkPermutation(str1: string, str2: string): boolean {
  if (str1.length === 0 || str2.length === 0) return false
  if (str1.length != str2.length) return false
  let str1Hash = {} as string
  for (let letter of str1) {
    if (str1Hash[letter] === undefined) str1Hash[letter] = 1
    else str1Hash[letter] = str1Hash[letter] + 1
  }
  for (let letter of str2) {
    if (str1Hash[letter] === undefined) return false
    if (str1Hash[letter] === 1) delete str1Hash[letter]
    if (str1Hash[letter] > 1) str1Hash[letter] = str1Hash[letter] - 1
  }
  return true
}

console.group('checkPermutation quick tests')
console.log(checkPermutation(TC1p2.yesP[0], TC1p2.yesP[1])) //true
console.log(checkPermutation(TC1p2.noP[0], TC1p2.noP[1])) //false
console.log(checkPermutation(TC1p2.definitelyNotP[0], TC1p2.definitelyNotP[1])) //false
console.log(checkPermutation(TC1p2.emptyStr[0], TC1p2.emptyStr[1])) //false
console.log(checkPermutation(TC1p2.dupplicateYes[0], TC1p2.dupplicateYes[1])) //true
console.log(checkPermutation(TC1p2.duplicateNo[0], TC1p2.duplicateNo[1])) //false
console.groupEnd()
