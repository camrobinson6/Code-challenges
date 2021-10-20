// Write your code below
function hasUniqueChars(word) {
  let newChars = new Set([])
    for (i = 0; i < word.length; i++){
    newChars.add(word['i'])
    }
   return newChars.size === word.length

    
}
hasUniqueChars("Moonday")