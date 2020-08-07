//given two strings, is the second the first with 1) one letter added, 2) one letter changed, 3) one letter removed
function oneAway(s1, s2) {
  //if they are the same string
  if (s1 === s2) return true

  //if they are more than one letter difference they can't make true in any case
  if (Math.abs(s1.length - s2.length > 1)) return false

  //if they are the same length only true return is if only one difference
  if (s1.length === s2.length) {
    let dissimilarCount = 0
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] != s2[i]) dissimilarCount++
      if (dissimilarCount > 1) return false
    }
    return true
  }

  //if s1 > s2 the only true return is if s1 has one extra letter
  if (s1.length > s2.length) {
    let timesSkipped = 0
    for (let i = 0, j = 0; i < s1.length - 1; i++, j++) {
      if (s1[i] != s2[j]) {
        timesSkipped++
        if (timesSkipped > 1) return false
        j--
      }
    }
    return true
  }

  //if s1 < s2 the only true return is if s2 has one extra letter
  if (s1.length < s2.length) {
    let timesSkipped = 0
    for (let i = 0, j = 0; i < s2.length - 1; i++, j++) {
      if (s1[i] != s2[j]) {
        timesSkipped++
        if (timesSkipped > 1) return false
        i--
      }
    }
    return true
  }
  return true
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
