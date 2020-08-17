"use strict";
//function that takes a string and returns counts of repeated characters
//time O(n), space O(n)
function stringCompression(str = '') {
    //have to go through the string once
    if (str.length === 0)
        return 'ERROR: stringCompression requires string';
    let currentLetter = str[0];
    let count = 1;
    let stringBuilder = [str[0]];
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== currentLetter) {
            stringBuilder.push(count.toString(), str[i]);
            count = 1;
            currentLetter = str[i];
        }
        else {
            count++;
        }
    }
    stringBuilder.push(count.toString());
    let compressedStr = stringBuilder.join('');
    return compressedStr.length >= str.length ? str : compressedStr;
}
let TC1p6;
TC1p6 = {
    basic: 'aabbbbcc',
    empty: '',
    oneLetter: 'd',
    noCompression: 'aabbcc',
};
console.log('basic:', stringCompression(TC1p6.basic)); //a2b4c2
console.log('empty:', stringCompression(TC1p6.empty)); //ERROR: stringCompression requires string
console.log('oneLetter:', stringCompression(TC1p6.oneLetter)); //d1
console.log('noCompression:', stringCompression(TC1p6.noCompression)); //d1
