// Write your solution below:
function pigLatin(string){
    let stringIntoList = string.split(" ")
    let consonants = 'bcdfghjklmnpqrstvwxyz'

    for (let i = 0; i < stringIntoList.length; i++){


        if(consonants.includes(stringIntoList[i][0])){
        stringIntoList[i]= stringIntoList[i].slice(1) + stringIntoList[i][0] + 'ay'
           
            // console.log(fixedWord)
        } else {
            stringIntoList[i] = stringIntoList[i] + 'yay'
            // console.log(fixedVowelWord)
        }
    }
    let result = stringIntoList.join(' ')

    return result
}

console.log(pigLatin('break this string into pieces'))