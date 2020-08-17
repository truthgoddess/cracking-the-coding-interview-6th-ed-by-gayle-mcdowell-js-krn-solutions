"use strict";
//given two strings, is the second the first with 1) one letter added, 2) one letter changed, 3) one letter removed
//time O(n), space O(n)
function oneAway(s1, s2) {
    //if they are the same string
    if (s1 === s2)
        return true;
    //if they are more than one letter difference they can't make true in any case
    if (Math.abs(s1.length - s2.length) > 1)
        return false;
    //if they are the same length only true return is if only one difference
    if (s1.length === s2.length) {
        let dissimilar = false;
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] != s2[i]) {
                if (!dissimilar)
                    dissimilar = !dissimilar;
                else
                    return false;
            }
        }
        return true;
    }
    else {
        //the only other case of true return is if either string has one extra letter
        let extraLetter = false;
        let longerString = s1.length > s2.length ? s1 : s2;
        let shorterString = longerString === s1 ? s2 : s1;
        for (let i = 0, j = 0; i < longerString.length - 1; i++, j++) {
            if (shorterString[i] !== longerString[j]) {
                if (!extraLetter) {
                    extraLetter = !extraLetter;
                    i--;
                }
                else
                    return false;
            }
        }
        return true;
    }
}
let TC1p5;
TC1p5 = {
    same: ['sameOl', 'sameOl'],
    oneReplace: ['catface', 'catrace'],
    oneRemoved: ['mice', 'ice'],
    oneAdded: ['oneMoreTim', 'oneMoreTilm'],
    permutation: ['abcd', 'bcda'],
    manyAdded1: ['ab', 'abbbbbbbbdddeee'],
    manyAdded2: ['grrrrrrrrrrrrrrrrrr', 'g'],
    repeats: ['aaaaaaabcccccc', 'aaaaaaadcccccc'],
};
console.group('oneAway quick tests');
console.log('same string:', oneAway(TC1p5.same[0], TC1p5.same[1])); //true
console.log('one replaced:', oneAway(TC1p5.oneReplace[0], TC1p5.oneReplace[1])); //true
console.log('one removed:', oneAway(TC1p5.oneRemoved[0], TC1p5.oneRemoved[1])); //true
console.log('one added:', oneAway(TC1p5.oneAdded[0], TC1p5.oneAdded[1])); //true
console.log('permutation:', oneAway(TC1p5.permutation[0], TC1p5.permutation[1])); //false
console.log('manyAdded 2nd item:', oneAway(TC1p5.manyAdded1[0], TC1p5.manyAdded1[1])); //false
console.log('manyAdded 1st item:', oneAway(TC1p5.manyAdded2[0], TC1p5.manyAdded2[1])); //false
console.log('repeats:', oneAway(TC1p5.repeats[0], TC1p5.repeats[1])); //true
console.groupEnd();
