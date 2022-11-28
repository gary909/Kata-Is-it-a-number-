function isDigit(s) {
    let myNum = Number(s);
    if (isNaN(myNum)) {
        return false;
    } else {
        return true;
    }
}

console.log(isDigit("-232.4")); // true
console.log(isDigit("   3   ")); // true
console.log(isDigit("3")); // true

console.log(isDigit("3-4")); // false
console.log(isDigit("  3  5")); // false
console.log(isDigit("3 5")); // false
console.log(isDigit("zero")); // false
console.log(isDigit("s2324")); // false
console.log(isDigit("....")); // false