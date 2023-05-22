'use strict'

function isPalindrome (word){
    word = word.toLowerCase();
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}
console.log(isPalindrome('ABBA'))
console.log(isPalindrome('kitty'))
console.log(isPalindrome('Repaper'))