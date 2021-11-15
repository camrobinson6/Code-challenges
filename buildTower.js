function buildTower(nFloors) {
    var starArray = [];
    var numSpaces = 0;
    
    for (i = nFloors; i > 0; i--) {
      
      starArray.push(" ".repeat(numSpaces) + "*".repeat(i) + "*".repeat(i-1)  + " ".repeat(numSpaces));
      numSpaces++;
    }
        return starArray.reverse();
  }
  console.log(buildTower(6));