// Write your code below this line.
function findLuckyNumbers(n){
 let randomNumbers = [1,2,3,4,5,6,7,8,9,10]
 let luckyNumbers = []   
 for (i = 0; i < n; i++) {
    let x = Math.floor(Math.random() * randomNumbers.length);  
    luckyNumbers.push(randomNumbers[x]) 
    randomNumbers.splice(x, 1)
}
    return luckyNumbers
}
let newLuckyNum = findLuckyNumbers(5)
console.log(newLuckyNum)
    