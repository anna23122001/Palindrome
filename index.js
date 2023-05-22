'use strict'
function isPalindrome (word){
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}
console.log(isPalindrome('abba'))
console.log(isPalindrome('kitty'))
console.log(isPalindrome('repaper'))