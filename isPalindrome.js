// Write your code below
function palindrome(word) {
    word = word.toLowerCase().replace(/(\W)|(_)/g,"").split("").reverse();
    for (var i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - 1 -i]) {
            return false;
        }
    }
    return true;
}
console.log(palindrome ("Racecar"))
