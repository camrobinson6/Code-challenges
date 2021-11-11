const wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];


const presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

let answer = [];

function guessGifts(wishlist, presents){
  
  return wishlist.map(wishlistMapValue =>{
    const {name, size, clatters, weight} = wishlistMapValue;

    if(
      presents.find(
        presentsValue =>
          presentsValue.size === size &&
          presentsValue.clatters === clatters &&
          presentsValue.weight === weight
        ) 
      )
      
        answer.push(name);
        return answer;
        
      
  });
}

console.log(guessGifts(wishlist, presents));/