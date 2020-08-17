"use strict";
//function to check if there is a a palendrome in any permutation of string
//ignore non-alpha char and spaces
let TC1p4;
TC1p4 = {
    yesP: 'qwertytrewq',
    yesP2: 'aabb',
    emptyStr: '',
    noP: 'qre',
    space: 'tacca to',
    ignoreNonLet: 'ta#$(3784cotac',
    tooManyRepeats: 'aaac',
    tooManyRepeatsTrue: 'aaccc',
};
//time O(n), space O(n)
function palendromePermutation(str) {
    if (str.length === 0)
        return false;
    let strHash = {};
    for (let letter of str) {
        if (parseInt(letter) < 10 || letter.toLowerCase() === letter.toUpperCase())
            continue;
        strHash[letter]
            ? strHash[letter.toLowerCase()]++
            : (strHash[letter.toLowerCase()] = 1);
    }
    let endingValues = Object.values(strHash);
    let numOdd = 0;
    for (let item of endingValues) {
        if (item % 2 !== 0)
            numOdd++;
        if (numOdd > 1)
            return false;
    }
    return true;
}
console.group('palendromePermutation quick tests');
console.log(palendromePermutation(TC1p4.yesP)); //true
console.log(palendromePermutation(TC1p4.yesP2)); //true
console.log(palendromePermutation(TC1p4.emptyStr)); //false
console.log(palendromePermutation(TC1p4.noP)); // false
console.log(palendromePermutation(TC1p4.space)); //true
console.log(palendromePermutation(TC1p4.ignoreNonLet)); //true
console.log(palendromePermutation(TC1p4.tooManyRepeats)); //false
console.log(palendromePermutation(TC1p4.tooManyRepeatsTrue)); //true
console.groupEnd();
