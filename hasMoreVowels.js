const hasMoreVowels = word => {
let vowels = ['a', 'e', 'i', 'o', 'u']
let vowelsCount = 0
for (let char of word){
    if (vowels.includes(char)) {
        vowelsCount++
    }
}
return true
} 


