let missingNumber = (nums, maxNum) => {
    for (let i = 0; i <= maxNum; i++){
        if (!nums.includes(i) && i != 0){
            console.log(i)
        }
    }
}
missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],10)




