// Write your solution below:
const sorter = (a,b) => {
    const legend = [-1,0,1];
    return legend[+(b>a)]
}
const shirtSorter = str => {
    const strArr = str.split("");
    return strArr
    .sort(sorter)
    .join("")
    .toLocaleLowerCase()
    .replace(/\s/g, "");
}
let str = "lms"
    console.log(shirtSorter('smllms'))