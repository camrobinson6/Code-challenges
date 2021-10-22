// Write your solution below:
function pigLatin(str) {
str = str.toLowerCase()
const vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelsIndex = 0;
if (vowels.includes(str[0])){
    return str + "yay";
} else {
    for (let char of str){
        if(vowels.includes(char)) {
            vowelsIndex = str.indexOf(char);
            break;
        }
    }

    return str.slice(vowelsIndex) + str.slice(0, vowelsIndex) + "ay";
}

}
    
console.log('apple') 
    


