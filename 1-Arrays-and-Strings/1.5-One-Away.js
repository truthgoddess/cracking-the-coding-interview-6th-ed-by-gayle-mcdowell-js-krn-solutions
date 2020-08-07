//given two strings, is the second the first with 1) one letter added, 2) one letter changed, 3) one letter removed
function oneAway(s1, s2) {
  //if they are the same string
  if (s1 === s2) return true

  //if they are more than one letter difference they can't make true in any case
  if (Math.abs(s1.length - s2.length) > 1) return false

  //if they are the same length only true return is if only one difference
  if (s1.length === s2.length) {
    let dissimilar = false
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] != s2[i]) {
        if (!dissimilar) dissimilar = !dissimilar
        else return false
      }
    }
    return true
  } else {
    //the only other case of true return is if either string has one extra letter
    let extraLetter = false
    let longerString = s1.length > s2.length ? s1 : s2
    let shorterString = longerString === s1 ? s2 : s1
    for (let i = 0, j = 0; i < longerString.length - 1; i++, j++) {
      if (shorterString[i] != longerString[j]) {
        if (!extraLetter) {
          extraLetter = !extraLetter
          i--
        } else return false
      }
    }
    return true
  }
}

let same = ['sameOl', 'sameOl']
let oneReplace = ['catface', 'catrace']
let oneRemoved = ['mice', 'ice']
let oneAdded = ['oneMoreTim', 'oneMoreTilm']
let permutation = ['abcd', 'bcda']
let manyAdded1 = ['ab', 'abbbbbbbbdddeee']
let manyAdded2 = ['grrrrrrrrrrrrrrrrrr', 'g']
let repeats = ['aaaaaaabcccccc', 'aaaaaaadcccccc']

console.group('oneAway quick tests')
console.log('same string:', oneAway(same[0], same[1])) //true
console.log('one replaced:', oneAway(oneReplace[0], oneReplace[1])) //true
console.log('one removed:', oneAway(oneRemoved[0], oneRemoved[1])) //true
console.log('one added:', oneAway(oneAdded[0], oneAdded[1])) //true
console.log('permutation:', oneAway(permutation[0], permutation[1])) //false
console.log('manyAdded 2nd item:', oneAway(manyAdded1[0], manyAdded1[1])) //false
console.log('manyAdded 1st item:', oneAway(manyAdded2[0], manyAdded2[1])) //false
console.log('repeats:', oneAway(repeats[0], repeats[1])) //true
console.groupEnd()
