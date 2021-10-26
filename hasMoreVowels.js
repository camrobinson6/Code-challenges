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


//   let vowelsNeeded = word.length / 2
//   let wordSplit = word.toLowerCase().split('')

//   for (let i = 0; i < wordSplit.length; i++) {
//     let letter = wordSplit[i]

//     if (vowels.includes(letter)) {
//       vowelCount++
//     }

//     if (vowelCount > vowelsNeeded) {
//       return true
//     }
//   }

//   return false