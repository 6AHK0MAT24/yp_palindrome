//palindrome('racecar') === true
// palindrome('table') === false

const palindrome = (str) => {
    let newStr = str.split("").reverse().join("")
    console.log(newStr)
    return newStr === str
};

// const palindrome = (str) => {
//     str = str.toLowerCase();
//     return str === str.split('').reverse().join('');
// }

console.log(palindrome('racecar'))
console.log(palindrome('table'))

