// Starting array
//let array = [1, 4, 11, 2, 37, -4]
//let array = [0, 21, 33, 6, 0, -9]
//let array = [0, 1, 2, 3, 4, 5]
let array = [28, 43, -12, 30, 4, 0, 12]


// Write your solution below:
let sum = 'False'

for (i = 0; i < array.length; i++){
for (j = 0; j < array.length; j++){
    if (i !== j) {
        if (array[i] + array[j] === 0) {
          sum= "True"
        } 
      }
    }
  }
  
  console.log(sum)

//Code ran sucessfully