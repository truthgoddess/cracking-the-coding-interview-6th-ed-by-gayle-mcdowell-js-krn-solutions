"use strict";
//function to check whether or not string has all unique characters
let TC1p1;
TC1p1 = {
    allUniqueStr: 'abcde',
    theOtherKind: 'hahanowicanwriteanything',
    emptyStr: '',
    stringWithNonAN: '#$%###',
    stringWithNonANUnique: '!@#$%^',
};
//with additional data structure
//time O(n), space O(1)
function uniqueChar1(str) {
    if (str === '')
        return false;
    let set = new Set();
    for (let letter of str) {
        if (set.has(letter))
            return false;
        else
            set.add(letter);
    }
    return true;
}
//without additional data structure
//time O(n^2), space O(1)
function uniqueChar2(str) {
    if (str === '')
        return -1;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}
console.group('uniqueChar1 quick tests');
console.log(uniqueChar1(TC1p1.allUniqueStr)); //true
console.log(uniqueChar1(TC1p1.theOtherKind)); //false
console.log(uniqueChar1(TC1p1.emptyStr)); //false
console.log(uniqueChar1(TC1p1.stringWithNonAN)); //false
console.log(uniqueChar1(TC1p1.stringWithNonANUnique)); //true
console.groupEnd();
console.group('uniqueChar2 quick tests');
console.log(uniqueChar2(TC1p1.allUniqueStr)); //true
console.log(uniqueChar2(TC1p1.theOtherKind)); //false
console.log(uniqueChar2(TC1p1.emptyStr)); //false
console.log(uniqueChar2(TC1p1.stringWithNonAN)); //false
console.log(uniqueChar2(TC1p1.stringWithNonANUnique)); //true
console.groupEnd();
