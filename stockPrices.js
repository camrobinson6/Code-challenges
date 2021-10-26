


const best = prices => {
    let maxProfit = 0;
    let lowestPrice = prices[0];

    for (let i =1; i < prices.length; i++){
        let price = prices[i];

        if(price < lowestPrice){
            lowestPrice = price;
        
        let profit = price - lowestPrice;

        maxProfit = Math.max(profit, maxProfit);
    }

    return maxProfit;
    }
}
